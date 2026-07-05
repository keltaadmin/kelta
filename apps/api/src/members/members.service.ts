import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import {
  MemberStatus,
  Prisma,
} from '@prisma/client';

import { PrismaService } from '../prisma/prisma.service';
import { NumberingService } from '../numbering/numbering.service';

import {
  MemberLifecycleService,
} from './services';

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
  ) {}

  /**
   * Returns a paginated member directory.
   */
  async findAll(query: MemberQueryDto) {
    const {
      page,
      limit,
      districtId,
      search,
      status,
    } = query;

    const where: Prisma.MemberWhereInput = {};

    if (districtId) {
      where.districtId = districtId;
    }

    if (status) {
      where.status = status;
    }

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
      ];
    }

    const [items, total] =
      await this.prisma.$transaction([
        this.prisma.member.findMany({
          where,

          include: {
            district: true,
          },

          skip: (page - 1) * limit,

          take: limit,

          orderBy: {
            firstName: 'asc',
          },
        }),

        this.prisma.member.count({
          where,
        }),
      ]);

    return {
      items,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  /**
   * Returns a single member.
   */
  async findOne(id: string) {
    const member =
      await this.prisma.member.findUnique({
        where: { id },

        include: {
          district: true,
        },
      });

    if (!member) {
      throw new NotFoundException(
        `Member '${id}' was not found.`,
      );
    }

    return member;
  }

  /**
   * Creates a new member.
   */
  async create(dto: CreateMemberDto) {
    return this.prisma.$transaction(
      async (tx) => {
        const memberNumber =
          await this.numberingService.generateMemberNumber(
            tx,
          );

        return tx.member.create({
          data: {
            ...dto,
            memberNumber,
          },
        });
      },
    );
  }

  /**
   * Activates a member.
   *
   * Future integrations:
   *
   * • Timeline
   * • Audit
   * • Notification
   * • Digital Identity
   * • QR Generation
   */
  async activateMember(id: string) {
    return this.prisma.$transaction(
      async (tx) => {
        const member =
          await tx.member.findUnique({
            where: { id },
          });

        if (!member) {
          throw new NotFoundException(
            `Member '${id}' was not found.`,
          );
        }

        const status =
          this.lifecycle.activate(
            member.status,
          );

        return tx.member.update({
          where: {
            id,
          },

          data: {
            status,
          },
        });
      },
    );
  }

  /**
   * Suspends a member.
   *
   * Future integrations:
   * • Timeline
   * • Audit
   * • Notification
   */
  async suspendMember(id: string) {
    return this.prisma.$transaction(async (tx) => {
      const member = await tx.member.findUnique({
        where: { id },
      });

      if (!member) {
        throw new NotFoundException(
          `Member '${id}' was not found.`,
        );
      }

      const status = this.lifecycle.suspend(
        member.status,
      );

      return tx.member.update({
        where: { id },

        data: {
          status,
        },
      });
    });
  }

  /**
   * Restores a suspended/inactive member.
   */
  async restoreMember(id: string) {
    return this.prisma.$transaction(async (tx) => {
      const member = await tx.member.findUnique({
        where: { id },
      });

      if (!member) {
        throw new NotFoundException(
          `Member '${id}' was not found.`,
        );
      }

      const status = this.lifecycle.restore(
        member.status,
      );

      return tx.member.update({
        where: { id },

        data: {
          status,
        },
      });
    });
  }

  /**
   * Renews a member's membership.
   *
   * Business Rules:
   * - If the current membership has not yet expired,
   *   extend from the existing expiry date.
   * - Otherwise, renew from today's date.
   *
   * Future integrations:
   * • Timeline
   * • Audit
   * • Notification
   * • Payment
   */
  async renewMember(id: string) {
    return this.prisma.$transaction(async (tx) => {
      const member = await tx.member.findUnique({
        where: { id },
      });

      if (!member) {
        throw new NotFoundException(
          `Member '${id}' was not found.`,
        );
      }

      const nextMembershipExpiryDate =
        this.lifecycle.renew(
          member.membershipExpiryDate,
        );

      return tx.member.update({
        where: { id },

        data: {
          membershipExpiryDate:
            nextMembershipExpiryDate,
        },
      });
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
        throw new NotFoundException(
          `Member '${id}' was not found.`,
        );
      }

      const status = this.lifecycle.retire(
        member.status,
      );

      return tx.member.update({
        where: { id },

        data: {
          status,
        },
      });
    });
  }

  /**
   * Updates member information.
   *
   * NOTE:
   * Business lifecycle operations
   * should NOT use this method.
   */
  async update(
    id: string,
    dto: UpdateMemberDto,
  ) {
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
