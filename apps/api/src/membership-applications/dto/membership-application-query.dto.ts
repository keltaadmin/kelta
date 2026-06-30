import { IsEnum, IsInt, IsOptional, IsString, Max, Min } from 'class-validator';

import { Type } from 'class-transformer';

import { ApplicationStatus } from '@prisma/client';

export class MembershipApplicationQueryDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page = 1;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  limit = 20;

  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @IsString()
  districtId?: string;

  @IsOptional()
  @IsEnum(ApplicationStatus)
  status?: ApplicationStatus;
}
