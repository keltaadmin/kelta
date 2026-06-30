import { Injectable } from '@nestjs/common';
import { WorkflowActionType } from '@prisma/client';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class WorkflowActionService {
  constructor(private readonly prisma: PrismaService) {}

  async recordAction(
    workflowId: string,
    userId: string,
    stepOrder: number,
    action: WorkflowActionType,
    remarks?: string,
  ) {
    return this.prisma.workflowAction.create({
      data: {
        workflowId,
        userId,
        stepOrder,
        action,
        remarks,
      },
    });
  }
}
