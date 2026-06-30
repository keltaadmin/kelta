import { IsString } from 'class-validator';

export class CreateWorkflowTemplateDto {
  @IsString()
  code: string;

  @IsString()
  name: string;
}
