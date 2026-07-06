import { ApiProperty } from '@nestjs/swagger';
import { IsIn } from 'class-validator';

export class GenerateMemberCardDto {
  @ApiProperty({
    enum: ['pdf', 'png', 'svg'],
    default: 'pdf',
  })
  @IsIn(['pdf', 'png', 'svg'])
  format!: 'pdf' | 'png' | 'svg';
}
