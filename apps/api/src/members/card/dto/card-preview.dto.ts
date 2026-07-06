import { IsOptional, IsString } from 'class-validator';

export class CardPreviewDto {
  @IsString()
  memberId!: string;

  @IsOptional()
  @IsString()
  memberNumber?: string;

  @IsOptional()
  @IsString()
  format?: 'svg';
}
