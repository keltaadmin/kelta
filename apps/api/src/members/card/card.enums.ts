/**
 * =============================================================================
 * Member Card Enums
 * =============================================================================
 */

export enum MemberCardFormat {
  SVG = 'svg',

  PNG = 'png',

  PDF = 'pdf',
}

export enum MemberCardStatus {
  ACTIVE = 'ACTIVE',

  EXPIRED = 'EXPIRED',

  REVOKED = 'REVOKED',
}

export enum MemberCardTheme {
  DEFAULT = 'default',
}

export enum MemberCardGenerationMode {
  PREVIEW = 'preview',

  DOWNLOAD = 'download',
}
