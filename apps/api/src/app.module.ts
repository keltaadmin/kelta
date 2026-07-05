import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { validateEnv } from './auth/config/validate-env';

import { PrismaModule } from './prisma/prisma.module';
import { CommonModule } from './common/common.module';
import { RbacModule } from './rbac/rbac.module';

import { AuthModule } from './auth/auth.module';
import { AuditModule } from './audit/audit.module';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { PermissionsModule } from './permissions/permissions.module';

import { MembersModule } from './members/members.module';
import { MembershipApplicationsModule } from './membership-applications/membership-applications.module';
import { MembershipApprovalModule } from './membership-approval/membership-approval.module';

import { DistrictsModule } from './districts/districts.module';

import { CommitteesModule } from './committees/committees.module';
import { CommitteePositionsModule } from './committee-positions/committee-positions.module';
import { CommitteeMembersModule } from './committee-members/committee-members.module';

import { NotificationsModule } from './notifications/notifications.module';
import { FileAttachmentsModule } from './file-attachments/file-attachments.module';

import { WorkflowsModule } from './workflows/workflows.module';
import { WorkflowTemplatesModule } from './workflow-templates/workflow-templates.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: validateEnv,
    }),

    /*
     * Core Infrastructure
     */
    PrismaModule,
    CommonModule,
    RbacModule,

    /*
     * Security
     */
    AuthModule,
    UsersModule,
    RolesModule,
    PermissionsModule,
    AuditModule,

    /*
     * Membership
     */
    MembersModule,
    MembershipApplicationsModule,
    MembershipApprovalModule,

    /*
     * Organization
     */
    DistrictsModule,
    CommitteesModule,
    CommitteePositionsModule,
    CommitteeMembersModule,

    /*
     * Platform Services
     */
    NotificationsModule,
    FileAttachmentsModule,
    WorkflowsModule,
    WorkflowTemplatesModule,
  ],

  controllers: [AppController],

  providers: [AppService],
})
export class AppModule {}
