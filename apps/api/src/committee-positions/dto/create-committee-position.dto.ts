import { IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateCommitteePositionDto {
  @IsString()
  name: string;

  @IsString()
  code: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsNumber()
  sortOrder?: number;
}
