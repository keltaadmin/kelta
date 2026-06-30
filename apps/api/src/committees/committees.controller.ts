import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { CommitteesService } from './committees.service';
import { CreateCommitteeDto } from './dto/create-committee.dto';
import { UpdateCommitteeDto } from './dto/update-committee.dto';

@Controller('committees')
export class CommitteesController {
  constructor(private readonly committeesService: CommitteesService) {}

  @Get()
  findAll() {
    return this.committeesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.committeesService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateCommitteeDto) {
    return this.committeesService.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateCommitteeDto) {
    return this.committeesService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.committeesService.remove(id);
  }
}
