import type { AuthorizationContext } from '../authorization';

import type { AuthorizationResult } from '../authorization';

/**
 * Enterprise Authorization Policy
 *
 * Every authorization policy within the platform
 * implements this interface.
 *
 * Policies may evaluate:
 *
 * • Ownership
 * • District boundaries
 * • Committee scope
 * • Resource state
 * • Workflow stage
 * • Time restrictions
 * • Future ABAC rules
 */
export interface AuthorizationPolicy<TResource = unknown> {
  /**
   * Human-readable policy name.
   */
  readonly name: string;

  /**
   * Determines whether the supplied
   * authorization context satisfies
   * this policy.
   */
  evaluate(
    context: AuthorizationContext<TResource>,
  ): AuthorizationResult | Promise<AuthorizationResult>;
}
