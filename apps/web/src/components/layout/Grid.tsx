/**
 * ============================================================
 * KELTA Enterprise Platform
 * Module      : Layout System
 * Component   : Grid
 * File        : Grid.tsx
 * Purpose     : Standard responsive grid wrapper.
 * ============================================================
 */

import { ReactNode } from 'react';

interface GridProps {
  children: ReactNode;
  className?: string;
}

export default function Grid({
  children,
  className = '',
}: GridProps) {
  return (
    <div
      className={`grid gap-8 md:grid-cols-2 lg:grid-cols-4 ${className}`}
    >
      {children}
    </div>
  );
}