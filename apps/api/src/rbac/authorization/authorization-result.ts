/**
 * Result returned by every authorization evaluation.
 */
export interface AuthorizationResult {
  /**
   * Whether access is granted.
   */
  allowed: boolean;

  /**
   * Human-readable reason.
   */
  reason?: string;

  /**
   * Optional policy that produced
   * the decision.
   */
  policy?: string;

  /**
   * Optional permission responsible
   * for the decision.
   */
  permission?: string;
}
