import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class NumberGeneratorService {
  constructor(private readonly prisma: PrismaService) {}

  async generateMembershipApplicationNumber(
    districtId: string,
  ): Promise<string> {
    const district = await this.prisma.district.findUnique({
      where: { id: districtId },
    });

    if (!district) {
      throw new Error('District not found');
    }

    const districtCode = district.code.toUpperCase();

    const count = await this.prisma.membershipApplication.count({
      where: {
        districtId,
      },
    });

    return `KELTA-${districtCode}-MA-${String(count + 1).padStart(4, '0')}`;
  }
}
