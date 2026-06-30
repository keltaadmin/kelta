import { IsOptional, IsString } from 'class-validator';

export class ApproveApplicationDto {
  @IsOptional()
  @IsString()
  remarks?: string;
}
