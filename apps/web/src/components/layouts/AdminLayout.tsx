import { ReactNode } from 'react';

import Sidebar from './Sidebar';
import Topbar from './Topbar';

interface Props {
  children: ReactNode;
}

export default function AdminLayout({
  children,
}: Props) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Topbar />

        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}