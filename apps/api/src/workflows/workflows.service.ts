import { Injectable, NotFoundException } from '@nestjs/common';

import { WorkflowStatus, MemberStatus } from '@prisma/client';

import { PrismaService } from '../prisma/prisma.service';
import { WorkflowActionService } from './workflow-action.service';
import { CreateWorkflowDto } from './dto/create-workflow.dto';
import { WorkflowAuthorizationService } from './workflow-authorization.service';

@Injectable()
export class WorkflowsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly workflowAuthorizationService: WorkflowAuthorizationService,
    private readonly workflowActionService: WorkflowActionService,
  ) {}

  findAll() {
    return this.prisma.workflow.findMany({
      include: {
        actions: {
          include: {
            user: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  findOne(id: string) {
    return this.prisma.workflow.findUnique({
      where: { id },
      include: {
        actions: {
          include: {
            user: true,
          },
        },
      },
    });
  }

  async create(dto: CreateWorkflowDto) {
    const template = await this.prisma.workflowTemplate.findUnique({
      where: {
        id: dto.templateId,
      },
      include: {
        steps: {
          orderBy: {
            stepOrder: 'asc',
          },
        },
      },
    });

    if (!template) {
      throw new NotFoundException('Workflow template not found');
    }

    const firstStep = template.steps[0];

    if (!firstStep) {
      throw new NotFoundException('Workflow template has no steps');
    }

    return this.prisma.workflow.create({
      data: {
        templateId: template.id,

        module: dto.module,
        entityType: dto.entityType,
        entityId: dto.entityId,

        currentStep: 1,

        currentApproverRoleId: firstStep.roleId,

        status: WorkflowStatus.PENDING,
      },

      include: {
        template: true,
        currentApproverRole: true,
      },
    });
  }

  async approve(workflowId: string, userId: string, remarks?: string) {
    const workflow = await this.prisma.workflow.findUnique({
      where: { id: workflowId },
      include: {
        template: {
          include: {
            steps: {
              orderBy: {
                stepOrder: 'asc',
              },
            },
          },
        },
      },
    });

    if (!workflow) {
      throw new NotFoundException('Workflow not found');
    }

    await this.workflowAuthorizationService.authorize(workflowId, userId);

    await this.workflowActionService.recordAction(
      workflowId,
      userId,
      workflow.currentStep,
      'APPROVE',
      remarks,
    );

    const nextStep = workflow.template?.steps.find(
      (step) => step.stepOrder === workflow.currentStep + 1,
    );

    if (nextStep) {
      return this.prisma.workflow.update({
        where: {
          id: workflowId,
        },
        data: {
          currentStep: nextStep.stepOrder,
          currentApproverRoleId: nextStep.roleId,
        },
      });
    }

    if (workflow.entityType === 'Member') {
      await this.prisma.member.update({
        where: {
          id: workflow.entityId,
        },
        data: {
          status: MemberStatus.ACTIVE,
          membershipApprovedAt: new Date(),
        },
      });
    }

    return this.prisma.workflow.update({
      where: {
        id: workflowId,
      },
      data: {
        status: WorkflowStatus.APPROVED,
        completedAt: new Date(),
        currentApproverRoleId: null,
      },
    });
  }

  async reject(workflowId: string, userId: string, remarks?: string) {
    const workflow = await this.prisma.workflow.findUnique({
      where: { id: workflowId },
    });

    if (!workflow) {
      throw new NotFoundException('Workflow not found');
    }

    await this.workflowAuthorizationService.authorize(workflowId, userId);

    await this.workflowActionService.recordAction(
      workflowId,
      userId,
      workflow.currentStep,
      'REJECT',
      remarks,
    );

    return this.prisma.workflow.update({
      where: { id: workflowId },
      data: {
        status: WorkflowStatus.REJECTED,
        completedAt: new Date(),
        currentApproverRoleId: null,
      },
    });
  }

  async getPending() {
    return this.prisma.workflow.findMany({
      where: {
        status: WorkflowStatus.PENDING,
      },
      include: {
        actions: {
          include: {
            user: true,
          },
        },
        currentApproverRole: true,
        currentApproverUser: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async getMyTasks(userId: string) {
    return this.prisma.workflow.findMany({
      where: {
        status: WorkflowStatus.PENDING,
        currentApproverUserId: userId,
      },
      include: {
        actions: {
          include: {
            user: true,
          },
        },
        currentApproverRole: true,
        currentApproverUser: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async returnWorkflow(workflowId: string, userId: string, remarks?: string) {
    const workflow = await this.prisma.workflow.findUnique({
      where: { id: workflowId },
    });

    if (!workflow) {
      throw new NotFoundException('Workflow not found');
    }

    await this.workflowAuthorizationService.authorize(workflowId, userId);

    await this.workflowActionService.recordAction(
      workflowId,
      userId,
      workflow.currentStep,
      'RETURN',
      remarks,
    );

    return this.prisma.workflow.update({
      where: { id: workflowId },
      data: {
        status: WorkflowStatus.RETURNED,
        completedAt: new Date(),
        currentApproverRoleId: null,
      },
    });
  }
}
