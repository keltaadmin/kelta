import { SetMetadata } from '@nestjs/common';

import type { Permission } from '../catalog/permissions';

/**
 * Metadata key used by the authorization system.
 *
 * This key is intentionally separate from the legacy
 * Permissions decorator to allow future expansion
 * (resource policies, ownership rules, ABAC, etc.).
 */
export const CAN_METADATA_KEY =
  'rbac:can';

/**
 * Enterprise Authorization Decorator
 *
 * Declares the permissions required to execute
 * a controller or route handler.
 *
 * Examples:
 *
 * @Can(PERMISSIONS.MEMBER.READ)
 *
 * @Can(
 *   PERMISSIONS.MEMBER.UPDATE,
 *   PERMISSIONS.MEMBER.DELETE,
 * )
 */
export function Can(
  ...permissions: readonly Permission[]
): MethodDecorator &
  ClassDecorator {
  return SetMetadata(
    CAN_METADATA_KEY,
    permissions,
  );
}
