import {
  Injectable,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

import { SystemRole } from '../common/enums/system-role.enum';

@Injectable()
export class WorkflowAuthorizationService {
  constructor(private readonly prisma: PrismaService) {}

  async authorize(workflowId: string, userId: string): Promise<void> {
    const workflow = await this.prisma.workflow.findUnique({
      where: {
        id: workflowId,
      },
    });

    if (!workflow) {
      throw new NotFoundException('Workflow not found');
    }

    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        member: {
          include: {
            district: true,
          },
        },
        roles: {
          include: {
            role: true,
          },
        },
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const roleIds = user.roles.map((r) => r.roleId);

    const roleNames = user.roles.map((r) => r.role.name);

    const isSuperAdmin = roleNames.includes(SystemRole.SUPER_ADMIN);

    if (isSuperAdmin) {
      return;
    }

    const hasWorkflowRole = roleIds.includes(
      workflow.currentApproverRoleId ?? '',
    );

    if (!hasWorkflowRole) {
      await this.logUnauthorizedAttempt(workflowId, userId, 'ROLE_MISMATCH');

      throw new ForbiddenException(
        'You are not authorized for this workflow step',
      );
    }

    const isStateLevel =
      roleNames.includes(SystemRole.STATE_ADMIN) ||
      roleNames.includes(SystemRole.STATE_SECRETARY);

    if (isStateLevel) {
      return;
    }

    if (workflow.entityType !== 'Member') {
      return;
    }

    const member = await this.prisma.member.findUnique({
      where: {
        id: workflow.entityId,
      },
    });

    if (!member) {
      throw new NotFoundException('Workflow member not found');
    }

    if (!user.member) {
      throw new ForbiddenException('User is not linked to a member profile');
    }

    if (user.member.districtId !== member.districtId) {
      await this.logUnauthorizedAttempt(
        workflowId,
        userId,
        'DISTRICT_MISMATCH',
      );

      throw new ForbiddenException(
        'You cannot approve members from another district',
      );
    }
  }

  private async logUnauthorizedAttempt(
    workflowId: string,
    userId: string,
    reason: string,
  ) {
    await this.prisma.auditLog.create({
      data: {
        userId,
        action: 'UNAUTHORIZED_WORKFLOW_ATTEMPT',

        entityType: 'Workflow',

        entityId: workflowId,

        metadata: {
          reason,
        },
      },
    });
  }
}
