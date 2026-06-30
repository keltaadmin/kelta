import { IsOptional, IsString } from 'class-validator';

export class ApproveMembershipDto {
  @IsString()
  applicationId!: string;

  @IsString()
  approvedByUserId!: string;

  @IsOptional()
  @IsString()
  remarks?: string;
}
