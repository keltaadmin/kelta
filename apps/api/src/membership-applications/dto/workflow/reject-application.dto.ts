import { IsString } from 'class-validator';

export class RejectApplicationDto {
  @IsString()
  remarks!: string;
}
