import { Controller, Get, Post, Param, Body, Query } from '@nestjs/common';

import { WorkflowsService } from './workflows.service';

import { CreateWorkflowDto } from './dto/create-workflow.dto';
import { WorkflowActionDto } from './dto/workflow-action.dto';

@Controller('workflows')
export class WorkflowsController {
  constructor(private readonly workflowsService: WorkflowsService) {}

  @Get()
  findAll() {
    return this.workflowsService.findAll();
  }

  @Get('pending')
  getPending() {
    return this.workflowsService.getPending();
  }

  @Get('my-tasks')
  getMyTasks(@Query('userId') userId: string) {
    return this.workflowsService.getMyTasks(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workflowsService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateWorkflowDto) {
    return this.workflowsService.create(dto);
  }

  @Post(':id/approve')
  approve(@Param('id') id: string, @Body() dto: WorkflowActionDto) {
    return this.workflowsService.approve(id, dto.userId, dto.remarks);
  }

  @Post(':id/reject')
  reject(@Param('id') id: string, @Body() dto: WorkflowActionDto) {
    return this.workflowsService.reject(id, dto.userId, dto.remarks);
  }

  @Post(':id/return')
  returnWorkflow(@Param('id') id: string, @Body() dto: WorkflowActionDto) {
    return this.workflowsService.returnWorkflow(id, dto.userId, dto.remarks);
  }
}
