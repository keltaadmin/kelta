/**
 * ============================================================
 * KELTA Enterprise Platform
 * Module      : Layout System
 * Component   : Page Section
 * File        : PageSection.tsx
 * Purpose     : Standard section wrapper.
 * ============================================================
 */

import { ReactNode } from 'react';

interface PageSectionProps {
  children: ReactNode;
  className?: string;
}

export default function PageSection({
  children,
  className = '',
}: PageSectionProps) {
  return (
    <section
      className={`py-20 lg:py-28 ${className}`}
    >
      {children}
    </section>
  );
}