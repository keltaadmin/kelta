/**
 * ============================================================
 * KELTA Enterprise Platform
 * Module      : Public Website
 * File        : layout.tsx
 * Purpose     : Shared layout for all public website pages.
 * ============================================================
 */

import type { ReactNode } from 'react';

import { PublicHeader } from '@/components/public/layout';

type PublicLayoutProps = {
  children: ReactNode;
};

export default function PublicLayout({
  children,
}: PublicLayoutProps) {
  return (
    <>
      <PublicHeader />

      <main className="flex-1">
        {children}
      </main>

      {/* PublicFooter will be added in Sprint 1 */}
    </>
  );
}