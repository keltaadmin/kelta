import { IsString, IsOptional, IsBoolean } from 'class-validator';

export class CreateCommitteeMemberDto {
  @IsString()
  committeeId: string;

  @IsString()
  memberId: string;

  @IsString()
  positionId: string;

  @IsOptional()
  startDate?: Date;

  @IsOptional()
  endDate?: Date;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
