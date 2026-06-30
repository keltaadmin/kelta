/**
 * ============================================================
 * KELTA Enterprise Platform
 * Shared UI
 * Component : SectionHeader
 * Purpose   : Standard section heading used across public pages.
 * ============================================================
 */

import { cn } from '@/lib/utils/cn';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  description,
  align = 'center',
  className,
}: SectionHeaderProps) {
  const alignment =
    align === 'left'
      ? 'items-start text-left'
      : 'items-center text-center';

  return (
    <div
      className={cn(
        'mb-12 flex flex-col gap-4',
        alignment,
        className
      )}
    >
      {badge && (
        <span className="inline-flex rounded-full bg-sky-100 px-4 py-1 text-sm font-semibold text-sky-700">
          {badge}
        </span>
      )}

      <h2 className="max-w-4xl text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="max-w-3xl text-lg leading-8 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}