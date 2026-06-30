import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

import { CreateCommitteeDto } from './dto/create-committee.dto';
import { UpdateCommitteeDto } from './dto/update-committee.dto';

@Injectable()
export class CommitteesService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.committee.findMany({
      include: {
        district: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.committee.findUnique({
      where: { id },
      include: {
        district: true,
      },
    });
  }

  create(data: CreateCommitteeDto) {
    return this.prisma.committee.create({
      data,
    });
  }

  update(id: string, data: UpdateCommitteeDto) {
    return this.prisma.committee.update({
      where: { id },
      data,
    });
  }

  remove(id: string) {
    return this.prisma.committee.delete({
      where: { id },
    });
  }
}
