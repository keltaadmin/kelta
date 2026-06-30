import { IsString } from 'class-validator';

export class CreateWorkflowDto {
  @IsString()
  templateId: string;

  @IsString()
  module: string;

  @IsString()
  entityType: string;

  @IsString()
  entityId: string;
}
