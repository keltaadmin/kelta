import type {
  AuthorizationContext,
  AuthorizationResult,
} from '../authorization';

import type {
  AuthorizationPolicy,
} from './policy.interface';

/**
 * Enterprise Policy Engine
 *
 * Executes one or more authorization policies
 * in sequence.
 *
 * Evaluation stops immediately when a policy
 * denies access.
 */
export class PolicyEngine {
  evaluate<TResource>(
    context: AuthorizationContext<TResource>,
    policies: readonly AuthorizationPolicy<TResource>[],
  ): AuthorizationResult {
    for (const policy of policies) {
      const result = policy.evaluate(context);

      if (result instanceof Promise) {
        throw new Error(
          'Async policies are not supported by evaluate(). Use evaluateAsync().',
        );
      }

      if (!result.allowed) {
        return result;
      }
    }

    return {
      allowed: true,
    };
  }

  async evaluateAsync<TResource>(
    context: AuthorizationContext<TResource>,
    policies: readonly AuthorizationPolicy<TResource>[],
  ): Promise<AuthorizationResult> {
    for (const policy of policies) {
      const result =
        await policy.evaluate(context);

      if (!result.allowed) {
        return result;
      }
    }

    return {
      allowed: true,
    };
  }
}

/**
 * Shared singleton instance.
 */
export const policyEngine =
  new PolicyEngine();
