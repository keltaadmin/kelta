import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

import { CreateCommitteeMemberDto } from './dto/create-committee-member.dto';
import { UpdateCommitteeMemberDto } from './dto/update-committee-member.dto';

@Injectable()
export class CommitteeMembersService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.committeeMember.findMany({
      include: {
        committee: true,
        member: true,
        position: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.committeeMember.findUnique({
      where: { id },
      include: {
        committee: true,
        member: true,
        position: true,
      },
    });
  }

  create(data: CreateCommitteeMemberDto) {
    return this.prisma.committeeMember.create({
      data: {
        committeeId: data.committeeId,
        memberId: data.memberId,
        positionId: data.positionId,
        startDate: data.startDate,
        endDate: data.endDate,
        isActive: data.isActive ?? true,
      },
      include: {
        committee: true,
        member: true,
        position: true,
      },
    });
  }

  update(id: string, data: UpdateCommitteeMemberDto) {
    return this.prisma.committeeMember.update({
      where: { id },
      data,
      include: {
        committee: true,
        member: true,
        position: true,
      },
    });
  }

  remove(id: string) {
    return this.prisma.committeeMember.delete({
      where: { id },
    });
  }
}
