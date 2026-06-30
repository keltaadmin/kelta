import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import { MembershipApplicationsService } from './membership-applications.service';

import { CreateMembershipApplicationDto } from './dto/create-membership-application.dto';
import { UpdateMembershipApplicationDto } from './dto/update-membership-application.dto';
import { MembershipApplicationQueryDto } from './dto/membership-application-query.dto';
import { SubmitApplicationDto } from './dto/workflow/submit-application.dto';
import { ApproveApplicationDto } from './dto/workflow/approve-application.dto';
import { RejectApplicationDto } from './dto/workflow/reject-application.dto';
import { ReturnApplicationDto } from './dto/workflow/return-application.dto';

@Controller('membership-applications')
export class MembershipApplicationsController {
  constructor(
    private readonly membershipApplicationsService: MembershipApplicationsService,
  ) {}

  @Get()
  async findAll(@Query() query: MembershipApplicationQueryDto) {
    return this.membershipApplicationsService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.membershipApplicationsService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() dto: CreateMembershipApplicationDto) {
    return this.membershipApplicationsService.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateMembershipApplicationDto) {
    return this.membershipApplicationsService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.membershipApplicationsService.remove(id);
  }

  @Post(':id/submit')
  submit(@Param('id') id: string, @Body() dto: SubmitApplicationDto) {
    return this.membershipApplicationsService.submit(id, dto);
  }

  @Post(':id/approve')
  approve(@Param('id') id: string, @Body() dto: ApproveApplicationDto) {
    return this.membershipApplicationsService.approve(id, dto);
  }

  @Post(':id/reject')
  reject(@Param('id') id: string, @Body() dto: RejectApplicationDto) {
    return this.membershipApplicationsService.reject(id, dto);
  }

  @Post(':id/return')
  returnForCorrection(
    @Param('id') id: string,
    @Body() dto: ReturnApplicationDto,
  ) {
    return this.membershipApplicationsService.returnForCorrection(id, dto);
  }
}
