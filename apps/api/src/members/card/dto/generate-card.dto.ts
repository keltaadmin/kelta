import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsEnum, IsOptional } from 'class-validator';

import { MemberCardFormat, MemberCardTheme } from '../card.enums';

export class GenerateCardDto {
  @ApiProperty({
    description: 'Output format.',
    enum: MemberCardFormat,
    example: MemberCardFormat.PDF,
  })
  @IsEnum(MemberCardFormat)
  format!: MemberCardFormat;

  @ApiPropertyOptional({
    description: 'Rendering theme.',
    enum: MemberCardTheme,
    default: MemberCardTheme.DEFAULT,
  })
  @IsOptional()
  @IsEnum(MemberCardTheme)
  theme?: MemberCardTheme = MemberCardTheme.DEFAULT;

  @ApiPropertyOptional({
    description: 'Generate without storing the document.',
    default: false,
  })
  @IsOptional()
  @IsBoolean()
  preview?: boolean = false;

  @ApiPropertyOptional({
    description: 'Force regeneration even if a cached copy exists.',
    default: false,
  })
  @IsOptional()
  @IsBoolean()
  regenerate?: boolean = false;

  @ApiPropertyOptional({
    description:
      'Include development guides and layout blocks in preview mode.',
    default: false,
  })
  @IsOptional()
  @IsBoolean()
  developerMode?: boolean = false;
}
