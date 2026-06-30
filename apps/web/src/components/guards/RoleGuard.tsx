import { ReactNode } from 'react';

import { hasRole } from '@/lib/rbac/hasRole';

interface Props {
  role: string;
  allowedRoles: string[];
  children: ReactNode;
}

export default function RoleGuard({
  role,
  allowedRoles,
  children,
}: Props) {
  if (
    !hasRole(role, allowedRoles)
  ) {
    return null;
  }

  return <>{children}</>;
}