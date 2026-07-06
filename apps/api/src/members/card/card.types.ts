import { MemberCardFormat } from './card.enums';

export type MemberCardMimeType =
  | 'image/svg+xml'
  | 'image/png'
  | 'application/pdf';

export interface GeneratedMemberCard {
  fileName: string;

  format: MemberCardFormat;

  mimeType: MemberCardMimeType;

  content: Buffer;
}

export interface MemberCardData {
  id: string;

  memberNumber: string;

  fullName: string;

  designation: string;

  district: string;

  category?: string;

  bloodGroup?: string;

  photoUrl?: string;

  qrCode?: string;

  issuedAt: Date;

  validUntil?: Date;
}
