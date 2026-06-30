import { Module } from '@nestjs/common';

import { PrismaModule } from '../prisma/prisma.module';
import { NumberingModule } from '../numbering/numbering.module';

import { MembershipApplicationsController } from './membership-applications.controller';
import { MembershipApplicationsService } from './membership-applications.service';

@Module({
  imports: [PrismaModule, NumberingModule],
  controllers: [MembershipApplicationsController],
  providers: [MembershipApplicationsService],
  exports: [MembershipApplicationsService],
})
export class MembershipApplicationsModule {}
