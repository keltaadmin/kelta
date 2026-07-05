import type { Permission } from '../catalog/permissions';
import type { PermissionGroup } from '../catalog/permission-groups';
import type { RoleId } from '../catalog/roles';
import type { RoleScope } from '../types';

/**
 * Authorization request.
 */
export interface AuthorizationRequest {
  role: RoleId;

  permission: Permission;

  scope?: RoleScope;

  resourceId?: string;

  ownerId?: string;

  districtId?: string;

  committeeId?: string;

  stateId?: string;
}

/**
 * Authorization result.
 */
export interface AuthorizationResult {
  allowed: boolean;

  reason?: string;

  resolvedPermissions: readonly Permission[];

  resolvedPermissionGroups: readonly PermissionGroup[];
}
