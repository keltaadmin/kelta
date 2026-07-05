import type { PermissionGroup } from '../catalog/permission-groups';

/**
 * Role Profile Definition
 *
 * A reusable permission profile that can be
 * assigned to one or more enterprise roles.
 *
 * Roles inherit all permission groups defined
 * by their profile.
 */
export interface RoleProfileDefinition {
  /**
   * Unique profile identifier.
   *
   * Example:
   * PLATFORM_ADMIN_PROFILE
   */
  id: string;

  /**
   * Human-readable name.
   */
  displayName: string;

  /**
   * Description shown in the administration UI.
   */
  description: string;

  /**
   * Permission groups included in this profile.
   */
  permissionGroups: readonly PermissionGroup[];

  /**
   * Indicates whether this profile is built into
   * the platform and cannot be removed.
   */
  system: boolean;

  /**
   * Optional icon used by the UI.
   */
  icon?: string;

  /**
   * Optional color used by badges.
   */
  color?: string;
}
