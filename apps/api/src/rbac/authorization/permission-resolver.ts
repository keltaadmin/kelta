import { PERMISSION_GROUPS } from '../catalog/permission-groups';

import { roleResolver } from './role-resolver';

import type { Permission } from '../catalog/permissions';
import type { RoleId } from '../catalog/roles';

/**
 * Enterprise Permission Resolver
 *
 * Expands a Role into its complete set of effective permissions.
 *
 * Resolution Flow
 * ----------------
 * Role
 *   ↓
 * Permission Groups
 *   ↓
 * Individual Permissions
 *
 * The resolved permissions are cached because authorization checks
 * occur extremely frequently throughout the application.
 */
export class PermissionResolver {
  /**
   * In-memory cache.
   *
   * Key:
   *   Role ID
   *
   * Value:
   *   Fully expanded permission list.
   */
  private readonly cache = new Map<
    RoleId,
    readonly Permission[]
  >();

  /**
   * Resolves all effective permissions for the supplied role.
   */
  resolvePermissions(
    roleId: RoleId,
  ): readonly Permission[] {
    // Return cached permissions when available.
    const cached =
      this.cache.get(roleId);

    if (cached) {
      return cached;
    }

    // Resolve Permission Groups assigned to the role.
    const groups =
      roleResolver.resolvePermissionGroups(roleId);

    // Build a unique permission set.
    const resolved =
      new Set<Permission>();

    for (const group of groups) {
      const permissions =
        PERMISSION_GROUPS[group];

      for (const permission of permissions) {
        resolved.add(permission);
      }
    }

    // Freeze the result to prevent accidental mutation.
    const result = Object.freeze([
      ...resolved,
    ]) as readonly Permission[];

    // Cache for future lookups.
    this.cache.set(
      roleId,
      result,
    );

    return result;
  }

  /**
   * Determines whether the supplied role contains the specified
   * permission.
   */
  hasPermission(
    roleId: RoleId,
    permission: Permission,
  ): boolean {
    return this.resolvePermissions(
      roleId,
    ).includes(permission);
  }

  /**
   * Returns every permission granted to the supplied role as a Set.
   *
   * Useful for bulk permission comparisons.
   */
  resolvePermissionSet(
    roleId: RoleId,
  ): ReadonlySet<Permission> {
    return new Set(
      this.resolvePermissions(roleId),
    );
  }

  /**
   * Clears the internal cache.
   *
   * Call this after:
   * - RBAC configuration changes
   * - Dynamic role updates
   * - Permission overrides
   * - Test setup/teardown
   */
  clearCache(): void {
    this.cache.clear();
  }
}

/**
 * Shared singleton instance.
 */
export const permissionResolver =
  new PermissionResolver();
