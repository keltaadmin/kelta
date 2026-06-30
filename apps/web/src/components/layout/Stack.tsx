/**
 * ============================================================
 * KELTA Enterprise Platform
 * Module      : Layout System
 * Component   : Stack
 * File        : Stack.tsx
 * Purpose     : Vertical spacing wrapper.
 * ============================================================
 */

import { ReactNode } from 'react';

interface StackProps {
  children: ReactNode;
  className?: string;
}

export default function Stack({
  children,
  className = '',
}: StackProps) {
  return (
    <div
      className={`space-y-8 ${className}`}
    >
      {children}
    </div>
  );
}