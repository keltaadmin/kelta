import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

import { CommitteeMembersService } from './committee-members.service';

import { CreateCommitteeMemberDto } from './dto/create-committee-member.dto';
import { UpdateCommitteeMemberDto } from './dto/update-committee-member.dto';

@Controller('committee-members')
export class CommitteeMembersController {
  constructor(
    private readonly committeeMembersService: CommitteeMembersService,
  ) {}

  @Get()
  findAll() {
    return this.committeeMembersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.committeeMembersService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateCommitteeMemberDto) {
    return this.committeeMembersService.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateCommitteeMemberDto) {
    return this.committeeMembersService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.committeeMembersService.remove(id);
  }
}
