import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

import { CommitteePositionsService } from './committee-positions.service';

import { CreateCommitteePositionDto } from './dto/create-committee-position.dto';

import { UpdateCommitteePositionDto } from './dto/update-committee-position.dto';

@Controller('committee-positions')
export class CommitteePositionsController {
  constructor(private readonly service: CommitteePositionsService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateCommitteePositionDto) {
    return this.service.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateCommitteePositionDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
