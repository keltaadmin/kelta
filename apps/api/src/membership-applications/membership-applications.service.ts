import {
  Injectable,
  NotFoundException,
  NotImplementedException,
} from '@nestjs/common';

import { ApplicationStatus, Prisma } from '@prisma/client';

import { PrismaService } from '../prisma/prisma.service';

import { CreateMembershipApplicationDto } from './dto/create-membership-application.dto';
import { MembershipApplicationQueryDto } from './dto/membership-application-query.dto';
import { UpdateMembershipApplicationDto } from './dto/update-membership-application.dto';
import { NumberingService } from '../numbering/numbering.service';

@Injectable()
export class MembershipApplicationsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly numberingService: NumberingService,
  ) {}

  async findAll(query: MembershipApplicationQueryDto) {
    const { page, limit, districtId, search, status } = query;

    const where: Prisma.MembershipApplicationWhereInput = {};

    if (districtId) {
      where.districtId = districtId;
    }

    if (status) {
      where.status = status;
    }

    if (search) {
      where.OR = [
        {
          applicationNo: {
            contains: search,
            mode: 'insensitive',
          },
        },
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

    const [items, total] = await this.prisma.$transaction([
      this.prisma.membershipApplication.findMany({
        where,
        include: {
          district: true,
          approvedMember: true,
        },
        skip: (page - 1) * limit,
        take: limit,
        orderBy: {
          createdAt: 'desc',
        },
      }),

      this.prisma.membershipApplication.count({
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

  async findOne(id: string) {
    const application = await this.prisma.membershipApplication.findUnique({
      where: {
        id,
      },
      include: {
        district: true,
        approvedMember: true,
      },
    });

    if (!application) {
      throw new NotFoundException('Membership application not found.');
    }

    return application;
  }

  async create(dto: CreateMembershipApplicationDto) {
    return this.prisma.$transaction(async (tx) => {
      const district = await tx.district.findUnique({
        where: {
          id: dto.districtId,
        },
        select: {
          code: true,
        },
      });

      if (!district) {
        throw new NotFoundException('District not found.');
      }

      const applicationNo =
        await this.numberingService.generateApplicationNumber(
          tx,
          district.code,
        );

      return tx.membershipApplication.create({
        data: {
          applicationNo,

          firstName: dto.firstName,
          lastName: dto.lastName,

          email: dto.email,
          mobile: dto.mobile,

          dateOfBirth: dto.dateOfBirth ? new Date(dto.dateOfBirth) : null,

          designation: dto.designation,

          addressLine1: dto.addressLine1,
          addressLine2: dto.addressLine2,
          city: dto.city,
          state: dto.state,
          postalCode: dto.postalCode,

          districtId: dto.districtId,

          membershipType: dto.membershipType,

          source: dto.source,

          remarks: dto.remarks,

          status: ApplicationStatus.DRAFT,
        },

        include: {
          district: true,
        },
      });
    });
  }

  update(id: string, dto: UpdateMembershipApplicationDto) {
    void id;
    void dto;

    throw new NotImplementedException('Implemented in Package 06C.5');
  }

  remove(id: string) {
    void id;

    throw new NotImplementedException('Implemented in Package 06C.5');
  }

  submit(id: string, dto: unknown) {
    void id;
    void dto;

    throw new NotImplementedException('Implemented in Package 07.3');
  }

  approve(id: string, dto: unknown) {
    void id;
    void dto;

    throw new NotImplementedException('Implemented in Package 07.3');
  }

  reject(id: string, dto: unknown) {
    void id;
    void dto;

    throw new NotImplementedException('Implemented in Package 07.3');
  }

  returnForCorrection(id: string, dto: unknown) {
    void id;
    void dto;

    throw new NotImplementedException('Implemented in Package 07.3');
  }
}
