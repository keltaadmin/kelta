import { Module } from '@nestjs/common';

import { MembersController } from './members.controller';
import { MembersService } from './members.service';

import { PrismaModule } from '../prisma/prisma.module';
import { NumberingModule } from '../numbering/numbering.module';

import { MemberEventFactory } from './events';
import { MemberCardModule } from './card';

import {
  MemberAuditService,
  MemberCardService,
  MemberDirectoryService,
  MemberDocumentService,
  MemberLifecycleService,
  MemberRenewalService,
  MemberTimelineService,
  MemberTransferService,
} from './services';

import {
  DigitalIdentityService,
  MemberVerificationService,
} from './services';

import { QRModule } from '../infrastructure/qr';

/**
 * Enterprise Member Module
 *
 * Responsibilities
 * - Member CRUD
 * - Member lifecycle
 * - Member directory
 * - Member digital identity
 * - Member documents
 * - Timeline
 * - Renewals
 * - Transfers
 */
@Module({
  imports: [
    PrismaModule,
    NumberingModule,
    QRModule,
    MemberCardModule,
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

    DigitalIdentityService,
    MemberVerificationService,
  ],

  exports: [
    MembersService,
  ],
})
export class MembersModule {}
