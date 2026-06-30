import { ReactNode } from 'react';

import Topbar from './Topbar';

interface Props {
  children: ReactNode;
}

export default function MemberLayout({
  children,
}: Props) {
  return (
    <div className="min-h-screen">
      <Topbar />

      <main className="p-6">
        {children}
      </main>
    </div>
  );
}