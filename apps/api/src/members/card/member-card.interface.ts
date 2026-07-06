/**
 * ============================================================
 * KELTA Enterprise Platform
 * Member Card Interface
 * ============================================================
 */

export interface MemberCard {
  readonly memberId: string;

  readonly memberNumber: string;

  readonly fullName: string;

  readonly designation?: string | null;

  readonly district: string;

  readonly photoUrl?: string | null;

  readonly qrCode: string;

  readonly publicToken: string;

  readonly issuedAt: Date;

  readonly expiresAt: Date | null;

  readonly cardVersion: number;

  readonly isExpired: boolean;

  readonly isRevoked: boolean;
}
