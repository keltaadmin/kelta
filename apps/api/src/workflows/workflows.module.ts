import { Module } from '@nestjs/common';

import { PrismaModule } from '../prisma/prisma.module';
import { WorkflowActionService } from './workflow-action.service';
import { WorkflowsController } from './workflows.controller';
import { WorkflowsService } from './workflows.service';
import { WorkflowAuthorizationService } from './workflow-authorization.service';

@Module({
  imports: [PrismaModule],
  controllers: [WorkflowsController],
  providers: [
    WorkflowsService,
    WorkflowAuthorizationService,
    WorkflowActionService,
  ],
  exports: [WorkflowAuthorizationService, WorkflowActionService],
})
export class WorkflowsModule {}
