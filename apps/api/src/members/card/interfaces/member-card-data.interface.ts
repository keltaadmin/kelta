import { MemberCardStatus } from '../card.enums';

/**
 * ============================================================================
 * Rendering Contract
 *
 * This interface is intentionally independent from Prisma entities.
 * The renderer should never know how data is stored.
 * ============================================================================
 */
export interface MemberCardData {

  /**
   * Internal UUID
   */
  id: string;

  /**
   * Public member number
   *
   * Example:
   * KELTA-MEMBER-2026-0001
   */
  memberNumber: string;

  /**
   * Full name
   */
  fullName: string;

  /**
   * Membership category
   *
   * Primary
   * Associate
   * Honorary
   * etc.
   */
  membershipType: string;

  /**
   * Optional designation
   */
  designation?: string;

  /**
   * District
   */
  district?: string;

  /**
   * State
   */
  state?: string;

  /**
   * Blood group
   */
  bloodGroup?: string;

  /**
   * Photo URL
   */
  photoUrl?: string;

  /**
   * Organization displayed on card
   */
  organizationName: string;

  /**
   * Date of issue
   */
  issueDate: Date;

  /**
   * Expiry
   *
   * Undefined = Lifetime
   */
  expiryDate?: Date;

  /**
   * QR destination
   *
   * Signed verification URL.
   */
  verificationUrl: string;

  /**
   * Current member status.
   */
  status: MemberCardStatus;

}
