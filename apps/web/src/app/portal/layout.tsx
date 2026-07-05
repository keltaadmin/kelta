import { ReactNode } from 'react';

import AuthGuard from '@/components/guards/AuthGuard';
import PortalLayout from '@/components/layouts/PortalLayout';

interface Props {
  children: ReactNode;
}

export default function Layout({
  children,
}: Props) {
  return (
    <AuthGuard>
      <PortalLayout>
        {children}
      </PortalLayout>
    </AuthGuard>
  );
}
