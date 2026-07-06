import { getRole } from '../catalog/roles';

import type { RoleDefinition } from '../types';
import type { RoleId } from '../catalog/roles';
import type { PermissionGroup } from '../catalog/permission-groups';

/**
 * Resolves role metadata and profile information.
 *
 * This resolver knows how to map:
 *
 * Role
 *   ↓
 * Profile
 *   ↓
 * Permission Groups
 */
export class RoleResolver {
  resolveRole(roleId: RoleId): RoleDefinition {
    return getRole(roleId);
  }

  resolvePermissionGroups(roleId: RoleId): readonly PermissionGroup[] {
    return this.resolveRole(roleId).permissionGroups;
  }
}

export const roleResolver = new RoleResolver();
