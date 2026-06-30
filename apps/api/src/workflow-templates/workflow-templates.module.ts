import { Module } from '@nestjs/common';

import { PrismaModule } from '../prisma/prisma.module';

import { WorkflowTemplatesController } from './workflow-templates.controller';
import { WorkflowTemplatesService } from './workflow-templates.service';

@Module({
  imports: [PrismaModule],
  controllers: [WorkflowTemplatesController],
  providers: [WorkflowTemplatesService],
})
export class WorkflowTemplatesModule {}
