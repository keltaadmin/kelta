/**
 * =============================================================================
 * KELTA
 * Member Card Constants
 * =============================================================================
 */

import { MemberCardFormat } from './card.enums';

export const MEMBER_CARD_VERSION = '1.0.0';

export const MEMBER_CARD_DEFAULT_THEME = 'default';

export const MEMBER_CARD_STORAGE_DIRECTORY = 'member-cards';

export const MEMBER_CARD_PREVIEW_ENDPOINT = 'preview';

export const MEMBER_CARD_DOWNLOAD_ENDPOINT = 'download';

export const MEMBER_CARD_DEFAULT_FORMAT =
  MemberCardFormat.SVG;

export const MEMBER_CARD_SUPPORTED_FORMATS = [
  MemberCardFormat.SVG,
  MemberCardFormat.PNG,
  MemberCardFormat.PDF,
] as const;

export const MEMBER_CARD_MIME_TYPES = {

  [MemberCardFormat.SVG]:
    'image/svg+xml',

  [MemberCardFormat.PNG]:
    'image/png',

  [MemberCardFormat.PDF]:
    'application/pdf',

} as const;

export const MEMBER_CARD_CACHE_PREFIX =
  'member-card';

export const MEMBER_CARD_CACHE_TTL_SECONDS =
  60 * 60;

export const MEMBER_CARD_FILE_PREFIX =
  'KELTA-MEMBER';
