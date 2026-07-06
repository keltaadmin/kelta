import { Type } from 'class-transformer';

import {
  IsBoolean,
  IsDateString,
  IsEnum,
  IsIn,
  IsInt,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

import {
  Gender,
  MemberStatus,
} from '@prisma/client';

export class MemberQueryDto {
  /**
   * Pagination
   */
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page = 1;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  limit = 20;

  /**
   * Search
   */
  @IsOptional()
  @IsString()
  search?: string;

  /**
   * Filters
   */
  @IsOptional()
  @IsString()
  districtId?: string;

  @IsOptional()
  @IsEnum(MemberStatus)
  status?: MemberStatus;

  @IsOptional()
  @IsEnum(Gender)
  gender?: Gender;

  @IsOptional()
  @Type(() => Boolean)
  @IsBoolean()
  isVerified?: boolean;

  @IsOptional()
  @Type(() => Boolean)
  @IsBoolean()
  isLifeMember?: boolean;

  /**
   * Joining Date Range
   */
  @IsOptional()
  @IsDateString()
  joiningFrom?: string;

  @IsOptional()
  @IsDateString()
  joiningTo?: string;

  /**
   * Sorting
   */
  @IsOptional()
  @IsIn([
    'memberNumber',
    'firstName',
    'joiningDate',
    'membershipExpiryDate',
    'createdAt',
  ])
  sortBy: string = 'firstName';

  @IsOptional()
  @IsIn([
    'asc',
    'desc',
  ])
  sortOrder: 'asc' | 'desc' = 'asc';
}
