import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

import { WorkflowTemplatesService } from './workflow-templates.service';

import { CreateWorkflowTemplateDto } from './dto/create-workflow-template.dto';
import { UpdateWorkflowTemplateDto } from './dto/update-workflow-template.dto';
import { CreateWorkflowTemplateStepDto } from './dto/create-workflow-template-step.dto';

@Controller('workflow-templates')
export class WorkflowTemplatesController {
  constructor(
    private readonly workflowTemplatesService: WorkflowTemplatesService,
  ) {}

  @Get()
  findAll() {
    return this.workflowTemplatesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workflowTemplatesService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateWorkflowTemplateDto) {
    return this.workflowTemplatesService.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateWorkflowTemplateDto) {
    return this.workflowTemplatesService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workflowTemplatesService.remove(id);
  }

  @Post(':id/steps')
  addStep(
    @Param('id') id: string,
    @Body()
    dto: CreateWorkflowTemplateStepDto,
  ) {
    return this.workflowTemplatesService.addStep(id, dto);
  }

  @Get(':id/steps')
  getSteps(@Param('id') id: string) {
    return this.workflowTemplatesService.getSteps(id);
  }

  @Delete('steps/:stepId')
  removeStep(@Param('stepId') stepId: string) {
    return this.workflowTemplatesService.removeStep(stepId);
  }
}
