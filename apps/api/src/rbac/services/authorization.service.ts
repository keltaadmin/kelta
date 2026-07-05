import { Injectable } from '@nestjs/common';

import { permissionResolver } from '../authorization/permission-resolver';

import type { Permission } from '../catalog/permissions';
import type { RoleId } from '../catalog/roles';

/**
 * Enterprise Authorization Service
 *
 * Central authorization service used by:
 *
 * - Guards
 * - Controllers
 * - Services
 * - Policy Engine
 * - Future ABAC implementation
 *
 * All permission evaluation should flow through this service.
 */
@Injectable()
export class AuthorizationService {
  /**
   * Returns every effective permission
   * granted to the supplied role.
   */
  getPermissions(
    role: RoleId,
  ): readonly Permission[] {
    return permissionResolver.resolvePermissions(
      role,
    );
  }

  /**
   * Determines whether the role has
   * the specified permission.
   */
  hasPermission(
    role: RoleId,
    permission: Permission,
  ): boolean {
    return permissionResolver.hasPermission(
      role,
      permission,
    );
  }

  /**
   * Determines whether the role
   * has every supplied permission.
   */
  hasAllPermissions(
    role: RoleId,
    permissions: readonly Permission[],
  ): boolean {
    const resolved =
      this.getPermissions(role);

    return permissions.every(permission =>
      resolved.includes(permission),
    );
  }

  /**
   * Determines whether the role
   * has at least one supplied permission.
   */
  hasAnyPermission(
    role: RoleId,
    permissions: readonly Permission[],
  ): boolean {
    const resolved =
      this.getPermissions(role);

    return permissions.some(permission =>
      resolved.includes(permission),
    );
  }

  /**
   * Returns the permission set.
   *
   * Useful for high-performance lookups.
   */
  getPermissionSet(
    role: RoleId,
  ): ReadonlySet<Permission> {
    return new Set(
      this.getPermissions(role),
    );
  }
}
