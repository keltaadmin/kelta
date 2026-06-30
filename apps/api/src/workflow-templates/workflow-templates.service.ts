import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

import { CreateWorkflowTemplateDto } from './dto/create-workflow-template.dto';
import { UpdateWorkflowTemplateDto } from './dto/update-workflow-template.dto';
import { CreateWorkflowTemplateStepDto } from './dto/create-workflow-template-step.dto';

@Injectable()
export class WorkflowTemplatesService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.workflowTemplate.findMany({
      include: {
        steps: {
          include: {
            role: true,
          },
          orderBy: {
            stepOrder: 'asc',
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  findOne(id: string) {
    return this.prisma.workflowTemplate.findUnique({
      where: { id },
      include: {
        steps: {
          include: {
            role: true,
          },
          orderBy: {
            stepOrder: 'asc',
          },
        },
      },
    });
  }

  create(dto: CreateWorkflowTemplateDto) {
    return this.prisma.workflowTemplate.create({
      data: dto,
    });
  }

  update(id: string, dto: UpdateWorkflowTemplateDto) {
    return this.prisma.workflowTemplate.update({
      where: { id },
      data: dto,
    });
  }

  remove(id: string) {
    return this.prisma.workflowTemplate.delete({
      where: { id },
    });
  }

  async addStep(templateId: string, dto: CreateWorkflowTemplateStepDto) {
    const template = await this.prisma.workflowTemplate.findUnique({
      where: { id: templateId },
    });

    if (!template) {
      throw new NotFoundException('Workflow template not found');
    }

    return this.prisma.workflowTemplateStep.create({
      data: {
        templateId,
        stepOrder: dto.stepOrder,
        roleId: dto.roleId,
        actionName: dto.actionName,
      },
      include: {
        role: true,
      },
    });
  }

  getSteps(templateId: string) {
    return this.prisma.workflowTemplateStep.findMany({
      where: {
        templateId,
      },
      include: {
        role: true,
      },
      orderBy: {
        stepOrder: 'asc',
      },
    });
  }

  removeStep(stepId: string) {
    return this.prisma.workflowTemplateStep.delete({
      where: {
        id: stepId,
      },
    });
  }
}
