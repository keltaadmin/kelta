import { ReactNode } from 'react';

import PortalSidebar from '@/components/navigation/PortalSidebar';

interface Props {
  children: ReactNode;
}

export default function PortalLayout({
  children,
}: Props) {
  return (
    <div className="flex min-h-screen">
      <PortalSidebar />

      <main className="flex-1 p-6 bg-gray-50">
        {children}
      </main>
    </div>
  );
}