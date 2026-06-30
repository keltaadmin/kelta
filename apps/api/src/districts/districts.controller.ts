import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

import { DistrictsService } from './districts.service';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';

@Controller('districts')
export class DistrictsController {
  constructor(private readonly districtsService: DistrictsService) {}

  @Get()
  findAll() {
    return this.districtsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.districtsService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateDistrictDto) {
    return this.districtsService.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateDistrictDto) {
    return this.districtsService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.districtsService.remove(id);
  }
}
