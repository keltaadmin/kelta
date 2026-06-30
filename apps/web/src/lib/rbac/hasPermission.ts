import { rolePermissions } from '@/lib/constants/rbac';

export function hasPermission(
  role: string,
  permission: string
): boolean {
  const roleConfig = rolePermissions.find(
    (r) => r.role === role
  );

  if (!roleConfig) {
    return false;
  }

  if (
    roleConfig.permissions.includes('*')
  ) {
    return true;
  }

  return roleConfig.permissions.includes(
    permission
  );
}