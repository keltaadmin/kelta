import { ApiProperty } from '@nestjs/swagger';

export class MemberCardResponseDto {

  @ApiProperty()
  memberId!: string;

  @ApiProperty()
  format!: string;

  @ApiProperty()
  downloadUrl!: string;
}
