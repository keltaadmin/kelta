import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { MemberQueryDto } from './dto/member-query.dto';
import { NumberingService } from '../numbering/numbering.service';

@Injectable()
export class MembersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly numberingService: NumberingService,
  ) {}

  async findAll(query: MemberQueryDto) {
    const { page, limit, districtId, search, status } = query;

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

    const [items, total] = await this.prisma.$transaction([
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

  async findOne(id: string) {
    return this.prisma.member.findUnique({
      where: { id },
      include: {
        district: true,
      },
    });
  }

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

  async update(id: string, dto: UpdateMemberDto) {
    return this.prisma.member.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: string) {
    return this.prisma.member.delete({
      where: { id },
    });
  }
}
