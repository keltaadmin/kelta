import { IsOptional, IsString, MaxLength } from 'class-validator';

export class CreatePermissionDto {
  @IsString()
  @MaxLength(100)
  code: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  description?: string;
}
