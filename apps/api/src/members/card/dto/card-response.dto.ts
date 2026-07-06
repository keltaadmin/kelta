import { ApiProperty } from '@nestjs/swagger';

import { MemberCardFormat } from '../card.enums';

export class CardResponseDto {
  @ApiProperty({
    example: true,
  })
  success!: boolean;

  @ApiProperty({
    example:
      '4d9fd91e-8b76-4bd8-97ea-cb63d02fb8d2',
  })
  memberId!: string;

  @ApiProperty({
    example:
      'KELTA-MEMBER-2026-0001',
  })
  memberNumber!: string;

  @ApiProperty({
    enum: MemberCardFormat,
  })
  format!: MemberCardFormat;

  @ApiProperty({
    example: 'application/pdf',
  })
  mimeType!: string;

  @ApiProperty({
    example:
      'KELTA-MEMBER-2026-0001.pdf',
  })
  fileName!: string;

  @ApiProperty({
    example:
      '/api/members/4d9fd91e-8b76-4bd8-97ea-cb63d02fb8d2/card/download?format=pdf',
  })
  downloadUrl!: string;

  @ApiProperty({
    example:
      '2026-07-06T10:15:22.000Z',
  })
  generatedAt!: Date;

  @ApiProperty({
    example: '1.0.0',
  })
  version!: string;
}
