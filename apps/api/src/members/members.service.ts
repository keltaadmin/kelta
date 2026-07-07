import { Injectable, NotFoundException } from '@nestjs/common';

import { Prisma } from '@prisma/client';

import { PrismaService } from '../prisma/prisma.service';
import { NumberingService } from '../numbering/numbering.service';

import {
  MemberLifecycleService,
  MemberTimelineService,
  MemberAuditService,
} from './services';

import { MemberEventFactory } from './events';

import type { MemberEvent } from './interfaces';

import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { MemberQueryDto } from './dto/member-query.dto';

/**
 * Enterprise Members Service
 *
 * Responsibilities
 * ----------------
 * - CRUD operations
 * - Member orchestration
 * - Delegation to domain services
 *
 * Business rules are delegated to dedicated services:
 *
 * • MemberLifecycleService
 * • MemberDirectoryService
 * • MemberCardService
 * • MemberTimelineService
 * • MemberRenewalService
 * • MemberTransferService
 */
@Injectable()
export class MembersService {
  constructor(
    private readonly prisma: PrismaService,

    private readonly numberingService: NumberingService,

    private readonly lifecycle: MemberLifecycleService,

    private readonly timeline: MemberTimelineService,

    private readonly audit: MemberAuditService,

    private readonly events: MemberEventFactory,
  ) {}

  /**
   * Returns a paginated member directory.
   *
   * Supports:
   * - Search
   * - Status filtering
   * - District filtering
   * - Gender filtering
   * - Verification filtering
   * - Life member filtering
   * - Joining date range
   * - Dynamic sorting
   * - Pagination
   */
  async findAll(query: MemberQueryDto) {
    const {
      page,
      limit,
      search,
      districtId,
      status,
      gender,
      isVerified,
      isLifeMember,
      joiningFrom,
      joiningTo,
      sortBy,
      sortOrder,
    } = query;

    const where: Prisma.MemberWhereInput = {};

    /**
     * Search
     */
    if (search) {
      where.OR = [
        {
          firstName: {
            contains: search,
            mode: 'insensitive',
          },
        },
        {
          lastName: {
            contains: search,
            mode: 'insensitive',
          },
        },
        {
          memberNumber: {
            contains: search,
            mode: 'insensitive',
          },
        },
        {
          mobile: {
            contains: search,
            mode: 'insensitive',
          },
        },
        {
          email: {
            contains: search,
            mode: 'insensitive',
          },
        },
      ];
    }

    /**
     * Filters
     */
    if (districtId) {
      where.districtId = districtId;
    }

    if (status) {
      where.status = status;
    }

    if (gender) {
      where.gender = gender;
    }

    if (typeof isVerified === 'boolean') {
      where.isVerified = isVerified;
    }

    if (typeof isLifeMember === 'boolean') {
      where.isLifeMember = isLifeMember;
    }

    /**
     * Joining Date Range
     */
    if (joiningFrom || joiningTo) {
      where.joiningDate = {};

      if (joiningFrom) {
        where.joiningDate.gte = new Date(joiningFrom);
      }

      if (joiningTo) {
        where.joiningDate.lte = new Date(joiningTo);
      }
    }

    /**
     * Sorting
     */
    const orderBy: Prisma.MemberOrderByWithRelationInput = {
      [sortBy]: sortOrder,
    };

    const [items, total] = await this.prisma.$transaction([
      this.prisma.member.findMany({
        where,

        include: {
          district: true,
        },

        orderBy,

        skip: (page - 1) * limit,

        take: limit,
      }),

      this.prisma.member.count({
        where,
      }),
    ]);

    const totalPages = Math.ceil(total / limit);

    return {
      items,

      pagination: {
        page,

        limit,

        total,

        totalPages,

        hasNext: page < totalPages,

        hasPrevious: page > 1,
      },
    };
  }

  /**
   * Returns a single member.
   */
  async findOne(id: string) {
    const member = await this.prisma.member.findUnique({
      where: { id },

      include: {
        district: true,
      },
    });

    if (!member) {
      throw new NotFoundException(`Member '${id}' was not found.`);
    }

    return member;
  }

  /**
   * Creates a new member.
   */
  async create(dto: CreateMemberDto) {
    return this.prisma.$transaction(async (tx) => {
      const memberNumber = await this.numberingService.generateMemberNumber(tx);

      return tx.member.create({
        data: {
          ...dto,
          memberNumber,
        },
      });
    });
  }

  /**
   * Activates a member.
   *
   * Business Rules
   * --------------
   * - Member must exist.
   * - Transition must be valid.
   * - Activation timestamp is only set once.
   * - Publishes timeline and audit events.
   */
  async activateMember(id: string) {
    return this.prisma.$transaction(async (tx) => {
      const member = await tx.member.findUnique({
        where: { id },
      });

      if (!member) {
        throw new NotFoundException(`Member '${id}' was not found.`);
      }

      const status = this.lifecycle.activate(member.status);

      const activatedAt = member.membershipActivatedAt ?? new Date();

      const updated = await tx.member.update({
        where: { id },

        data: {
          status,
          membershipActivatedAt: activatedAt,
        },
      });

      const event = this.events.memberActivated(updated.id, member.status);

      this.publishEvent(event);

      return updated;
    });
  }

  /**
   * Suspends a member.
   */
  async suspendMember(id: string) {
    return this.prisma.$transaction(async (tx) => {
      const member = await tx.member.findUnique({
        where: { id },
      });

      if (!member) {
        throw new NotFoundException(`Member '${id}' was not found.`);
      }

      const status = this.lifecycle.suspend(member.status);

      const updated = await tx.member.update({
        where: { id },

        data: {
          status,
        },
      });

      const event = this.events.memberSuspended(updated.id, member.status);

      this.publishEvent(event);

      return updated;
    });
  }

  /**
   * Restores a suspended or inactive member.
   */
  async restoreMember(id: string) {
    return this.prisma.$transaction(async (tx) => {
      const member = await tx.member.findUnique({
        where: { id },
      });

      if (!member) {
        throw new NotFoundException(`Member '${id}' was not found.`);
      }

      const status = this.lifecycle.restore(member.status);

      const updated = await tx.member.update({
        where: { id },

        data: {
          status,
        },
      });

      const event = this.events.memberRestored(updated.id, member.status);

      this.publishEvent(event);

      return updated;
    });
  }

  /**
   * Renews a member's membership.
   */
  async renewMember(id: string) {
    return this.prisma.$transaction(async (tx) => {
      const member = await tx.member.findUnique({
        where: { id },
      });

      if (!member) {
        throw new NotFoundException(`Member '${id}' was not found.`);
      }

      const previousExpiry = member.membershipExpiryDate;

      const nextExpiry = this.lifecycle.renew(previousExpiry);

      const updated = await tx.member.update({
        where: { id },

        data: {
          membershipExpiryDate: nextExpiry,
        },
      });

      const event = this.events.membershipRenewed(
        updated.id,
        previousExpiry,
        nextExpiry,
      );

      this.publishEvent(event);

      return updated;
    });
  }

  /**
   * Retires a member permanently.
   */
  async retireMember(id: string) {
    return this.prisma.$transaction(async (tx) => {
      const member = await tx.member.findUnique({
        where: { id },
      });

      if (!member) {
        throw new NotFoundException(`Member '${id}' was not found.`);
      }

      const status = this.lifecycle.retire(member.status);

      const updated = await tx.member.update({
        where: { id },

        data: {
          status,
        },
      });

      const event = this.events.memberRetired(updated.id, member.status);

      this.publishEvent(event);

      return updated;
    });
  }

  /**
   * Publishes a member domain event.
   *
   * Centralizes event propagation so lifecycle methods
   * do not duplicate orchestration logic.
   *
   * Future integrations:
   * - Notifications
   * - Email
   * - WhatsApp
   * - Push notifications
   * - WebSocket
   * - Analytics
   */
  private publishEvent(event: MemberEvent): void {
    this.timeline.recordLifecycle(event);

    this.audit.recordBusiness(event);
  }

  /**
   * Updates member information.
   *
   * NOTE:
   * Business lifecycle operations
   * should NOT use this method.
   */
  async update(id: string, dto: UpdateMemberDto) {
    await this.findOne(id);

    return this.prisma.member.update({
      where: {
        id,
      },

      data: dto,
    });
  }

  /**
   * Deletes a member.
   *
   * Future versions may implement
   * soft-delete or archival.
   */
  async remove(id: string) {
    await this.findOne(id);

    return this.prisma.member.delete({
      where: {
        id,
      },
    });
  }
}
