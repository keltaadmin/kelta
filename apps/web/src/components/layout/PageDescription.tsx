/**
 * ============================================================
 * KELTA Enterprise Platform
 * Module      : Layout System
 * Component   : Page Description
 * File        : PageDescription.tsx
 * ============================================================
 */

import { ReactNode } from 'react';

interface PageDescriptionProps {
  children: ReactNode;
  className?: string;
}

export default function PageDescription({
  children,
  className = '',
}: PageDescriptionProps) {
  return (
    <p
      className={`mt-6 max-w-3xl text-lg leading-8 text-slate-600 ${className}`}
    >
      {children}
    </p>
  );
}