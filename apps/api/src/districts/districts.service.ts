import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';

@Injectable()
export class DistrictsService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.district.findMany();
  }

  create(data: CreateDistrictDto) {
    return this.prisma.district.create({
      data,
    });
  }
  findOne(id: string) {
    return this.prisma.district.findUnique({
      where: { id },
    });
  }

  update(id: string, data: UpdateDistrictDto) {
    return this.prisma.district.update({
      where: { id },
      data,
    });
  }

  remove(id: string) {
    return this.prisma.district.delete({
      where: { id },
    });
  }
}
