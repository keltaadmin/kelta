import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

import { CreateCommitteePositionDto } from './dto/create-committee-position.dto';

import { UpdateCommitteePositionDto } from './dto/update-committee-position.dto';

@Injectable()
export class CommitteePositionsService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.committeePosition.findMany({
      orderBy: {
        sortOrder: 'asc',
      },
    });
  }

  findOne(id: string) {
    return this.prisma.committeePosition.findUnique({
      where: { id },
    });
  }

  create(data: CreateCommitteePositionDto) {
    return this.prisma.committeePosition.create({
      data,
    });
  }

  update(id: string, data: UpdateCommitteePositionDto) {
    return this.prisma.committeePosition.update({
      where: { id },
      data,
    });
  }

  remove(id: string) {
    return this.prisma.committeePosition.delete({
      where: { id },
    });
  }
}
