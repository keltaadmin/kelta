import { IsEnum, IsOptional, IsString } from 'class-validator';

import { CommitteeLevel } from '@prisma/client';

export class CreateCommitteeDto {
  @IsString()
  name: string;

  @IsString()
  code: string;

  @IsEnum(CommitteeLevel)
  level: CommitteeLevel;

  @IsOptional()
  @IsString()
  districtId?: string;
}
