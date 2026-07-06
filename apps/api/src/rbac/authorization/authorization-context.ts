import type { Permission } from '../catalog/permissions';
import type { RoleId } from '../catalog/roles';

/**
 * Enterprise Authorization Context
 *
 * Carries every piece of information required to
 * evaluate an authorization request.
 *
 * Initially this supports RBAC.
 *
 * It is intentionally extensible for:
 *
 * • Ownership
 * • District restrictions
 * • Committee restrictions
 * • ABAC
 * • Policy Engine
 * • Multi-tenancy
 */
export interface AuthorizationContext<TResource = unknown> {
  /**
   * Authenticated User ID.
   */
  userId: string;

  /**
   * Primary role.
   */
  role: RoleId;

  /**
   * Fully resolved permissions.
   */
  permissions: readonly Permission[];

  /**
   * State identifier.
   */
  stateId?: string;

  /**
   * District identifier.
   */
  districtId?: string;

  /**
   * Committee identifier.
   */
  committeeId?: string;

  /**
   * Membership identifier.
   */
  memberId?: string;

  /**
   * Optional resource under evaluation.
   */
  resource?: TResource;

  /**
   * Optional request metadata.
   */
  metadata?: Record<string, unknown>;
}
