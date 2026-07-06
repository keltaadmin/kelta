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

export interface MemberCardMetadata {

  memberId: string;

  memberNumber: string;

  generatedAt: Date;

  version: string;

  format: MemberCardFormat;

}
