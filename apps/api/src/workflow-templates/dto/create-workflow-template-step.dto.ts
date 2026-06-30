import { IsInt, IsString, Min } from 'class-validator';

export class CreateWorkflowTemplateStepDto {
  @IsInt()
  @Min(1)
  stepOrder: number;

  @IsString()
  roleId: string;

  @IsString()
  actionName: string;
}
