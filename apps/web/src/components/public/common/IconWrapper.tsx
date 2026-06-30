/**
 * ============================================================
 * KELTA Enterprise Platform
 * Public UI Library
 * Component : IconWrapper
 * ============================================================
 */

import { ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

interface IconWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function IconWrapper({
  children,
  className,
}: IconWrapperProps) {
  return (
    <div
      className={cn(
        'flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-700 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-sky-700 group-hover:text-white',
        className
      )}
    >
      {children}
    </div>
  );
}