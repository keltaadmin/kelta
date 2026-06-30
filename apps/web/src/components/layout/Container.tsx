/**
 * ============================================================
 * KELTA Enterprise Platform
 * Module      : Layout System
 * Component   : Container
 * File        : Container.tsx
 * Purpose     : Standard page width container.
 * ============================================================
 */

import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = '',
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
}