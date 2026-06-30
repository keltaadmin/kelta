import { ReactNode } from 'react';

import PortalLayout from '@/components/layouts/PortalLayout';

interface Props {
  children: ReactNode;
}

export default function Layout({
  children,
}: Props) {
  return (
    <PortalLayout>
      {children}
    </PortalLayout>
  );
}