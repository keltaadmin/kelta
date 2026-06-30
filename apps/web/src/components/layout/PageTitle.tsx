/**
 * ============================================================
 * KELTA Enterprise Platform
 * Module      : Layout System
 * Component   : Page Title
 * File        : PageTitle.tsx
 * ============================================================
 */

import { ReactNode } from 'react';

interface PageTitleProps {
  children: ReactNode;
  className?: string;
}

export default function PageTitle({
  children,
  className = '',
}: PageTitleProps) {
  return (
    <h2
      className={`text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl ${className}`}
    >
      {children}
    </h2>
  );
}