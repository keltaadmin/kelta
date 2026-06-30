import { Module } from '@nestjs/common';

import { PrismaModule } from '../prisma/prisma.module';
import { NumberingModule } from '../numbering/numbering.module';

import { MembershipApprovalService } from './membership-approval.service';

@Module({
  imports: [PrismaModule, NumberingModule],
  providers: [MembershipApprovalService],
  exports: [MembershipApprovalService],
})
export class MembershipApprovalModule {}
