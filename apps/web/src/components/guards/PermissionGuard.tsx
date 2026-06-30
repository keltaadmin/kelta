import { ReactNode } from 'react';

import { hasPermission } from '@/lib/rbac/hasPermission';

interface Props {
  role: string;
  permission: string;
  children: ReactNode;
}

export default function PermissionGuard({
  role,
  permission,
  children,
}: Props) {
  if (
    !hasPermission(role, permission)
  ) {
    return null;
  }

  return <>{children}</>;
}