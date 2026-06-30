import {
  IsDateString,
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

import { ApplicationSource, MembershipType } from '@prisma/client';

export class CreateMembershipApplicationDto {
  @IsString()
  @MaxLength(100)
  firstName!: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  lastName?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  mobile?: string;

  @IsOptional()
  @IsDateString()
  dateOfBirth?: string;

  @IsOptional()
  @IsString()
  designation?: string;

  @IsOptional()
  @IsString()
  addressLine1?: string;

  @IsOptional()
  @IsString()
  addressLine2?: string;

  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsString()
  state?: string;

  @IsOptional()
  @IsString()
  postalCode?: string;

  @IsString()
  districtId!: string;

  @IsOptional()
  @IsEnum(MembershipType)
  membershipType?: MembershipType;

  @IsOptional()
  @IsEnum(ApplicationSource)
  source?: ApplicationSource;

  @IsOptional()
  @IsString()
  remarks?: string;
}
