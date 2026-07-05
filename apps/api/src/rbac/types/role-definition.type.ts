import type { PermissionGroup } from '../catalog/permission-groups';
import type { RoleScope } from './role-scope.type';
import type { RoleLevel } from '../catalog/role-levels';

export interface RoleDefinition {
  id: string;

  displayName: string;

  description: string;

  hierarchy: RoleLevel;

  scope: RoleScope;

  system: boolean;

  assignableBy: readonly string[];

  permissionGroups: readonly PermissionGroup[];

  configurable?: boolean;

  visibleInDirectory?: boolean;

  defaultLandingPage?: string;

  icon?: string;

  color?: string;
}
