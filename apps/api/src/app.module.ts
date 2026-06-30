import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { MembersModule } from './members/members.module';
import { DistrictsModule } from './districts/districts.module';
import { CommitteesModule } from './committees/committees.module';
import { ConfigModule } from '@nestjs/config';
import { CommitteeMembersModule } from './committee-members/committee-members.module';
import { PermissionsModule } from './permissions/permissions.module';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';
import { AuditModule } from './audit/audit.module';
import { NotificationsModule } from './notifications/notifications.module';
import { FileAttachmentsModule } from './file-attachments/file-attachments.module';
import { WorkflowsModule } from './workflows/workflows.module';
import { WorkflowTemplatesModule } from './workflow-templates/workflow-templates.module';
import { MembershipApplicationsModule } from './membership-applications/membership-applications.module';
import { MembershipApprovalModule } from './membership-approval/membership-approval.module';
import { CommonModule } from './common/common.module';

import { CommitteePositionsModule } from './committee-positions/committee-positions.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    MembersModule,
    MembershipApplicationsModule,
    MembershipApprovalModule,
    DistrictsModule,
    CommitteesModule,
    CommitteePositionsModule,
    CommitteeMembersModule,
    PermissionsModule,
    UsersModule,
    RolesModule,
    AuthModule,
    AuditModule,
    NotificationsModule,
    FileAttachmentsModule,
    WorkflowsModule,
    WorkflowTemplatesModule,
    CommonModule,
  ],

  controllers: [AppController],

  providers: [AppService],
})
export class AppModule {}
