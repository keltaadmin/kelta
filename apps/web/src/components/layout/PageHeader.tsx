/**
 * ============================================================
 * KELTA Enterprise Platform
 * Module      : Layout System
 * Component   : Page Header
 * File        : PageHeader.tsx
 * ============================================================
 */

import { ReactNode } from 'react';

interface PageHeaderProps {
  children: ReactNode;
  className?: string;
}

export default function PageHeader({
  children,
  className = '',
}: PageHeaderProps) {
  return (
    <header
      className={`mb-16 text-center ${className}`}
    >
      {children}
    </header>
  );
}