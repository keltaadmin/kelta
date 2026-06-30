import { IsString } from 'class-validator';

export class CreateDistrictDto {
  @IsString()
  code: string;

  @IsString()
  name: string;
}
