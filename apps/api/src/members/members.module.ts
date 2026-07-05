import { Module } from '@nestjs/common';

import { MembersController } from './members.controller';
import { MembersService } from './members.service';

import { PrismaModule } from '../prisma/prisma.module';
import { NumberingModule } from '../numbering/numbering.module';

import { MemberAuditService } from './audit/member-audit.service';
import { MemberEventFactory } from './events';

import {
  MemberLifecycleService,
  MemberDirectoryService,
  MemberCardService,
  MemberDocumentService,
  MemberRenewalService,
  MemberTimelineService,
  MemberTransferService,
} from './services';

/**
 * Enterprise Member Module
 *
 * Responsibilities:
 * - Member CRUD
 * - Member lifecycle
 * - Member directory
 * - Digital identity
 * - Member documents
 * - Timeline
 * - Renewals
 * - Transfers
 */
@Module({
  imports: [
    PrismaModule,
    NumberingModule,
  ],

  controllers: [
    MembersController,
  ],

  providers: [
    MembersService,

    MemberLifecycleService,
    MemberDirectoryService,
    MemberCardService,
    MemberDocumentService,
    MemberRenewalService,
    MemberTimelineService,
    MemberTransferService,

    MemberAuditService,
    MemberEventFactory,
  ],

  exports: [
    MembersService,
  ],
})
export class MembersModule {}
