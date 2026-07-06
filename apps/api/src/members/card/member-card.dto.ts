import { ApiProperty } from '@nestjs/swagger';

export class MemberCardDto {

  @ApiProperty()
  memberId!: string;

  @ApiProperty()
  memberNumber!: string;

  @ApiProperty()
  fullName!: string;

  @ApiProperty({
    nullable: true,
  })
  designation!: string | null;

  @ApiProperty()
  district!: string;

  @ApiProperty({
    nullable: true,
  })
  photoUrl!: string | null;

  @ApiProperty()
  qrCode!: string;

  @ApiProperty()
  publicToken!: string;

  @ApiProperty()
  issuedAt!: Date;

  @ApiProperty({
    nullable: true,
  })
  expiresAt!: Date | null;

  @ApiProperty()
  cardVersion!: number;

  @ApiProperty()
  isExpired!: boolean;

  @ApiProperty()
  isRevoked!: boolean;
}
