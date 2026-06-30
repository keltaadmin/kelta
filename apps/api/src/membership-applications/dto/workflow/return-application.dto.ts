import { IsString } from 'class-validator';

export class ReturnApplicationDto {
  @IsString()
  remarks!: string;
}
