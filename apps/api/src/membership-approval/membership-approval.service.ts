import { Injectable, NotFoundException } from '@nestjs/common';

import {
  ApplicationStatus,
  MemberStatus,
  MembershipType,
  Prisma,
} from '@prisma/client';

import { PrismaService } from '../prisma/prisma.service';
import { NumberingService } from '../numbering/numbering.service';

@Injectable()
export class MembershipApprovalService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly numberingService: NumberingService,
  ) {}

  async approveMembershipApplication(applicationId: string) {
    return this.prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      const application = await tx.membershipApplication.findUnique({
        where: {
          id: applicationId,
        },
      });

      if (!application) {
        throw new NotFoundException('Membership application not found');
      }

      if (application.approvedMemberId) {
        throw new Error('Application already approved.');
      }

      const memberNo = await this.numberingService.generateMemberNumber(tx);

      const member = await tx.member.create({
        data: {
          memberNumber: memberNo,

          firstName: application.firstName,
          lastName: application.lastName,

          email: application.email,
          mobile: application.mobile,

          dateOfBirth: application.dateOfBirth,
          gender: application.gender,

          addressLine1: application.addressLine1,
          addressLine2: application.addressLine2,
          city: application.city,
          state: application.state,
          postalCode: application.postalCode,

          designation: application.designation,

          districtId: application.districtId,

          isLifeMember: application.membershipType === MembershipType.LIFE,

          status: MemberStatus.ACTIVE,

          membershipApprovedAt: new Date(),
        },
      });

      await tx.membershipApplication.update({
        where: {
          id: application.id,
        },
        data: {
          approvedMemberId: member.id,
          status: ApplicationStatus.APPROVED,
          approvedAt: new Date(),
        },
      });

      return member;
    });
  }
}
