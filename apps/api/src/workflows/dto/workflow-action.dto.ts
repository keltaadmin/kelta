import { IsString, IsOptional } from 'class-validator';

export class WorkflowActionDto {
  @IsString()
  userId: string;

  @IsOptional()
  @IsString()
  remarks?: string;
}
