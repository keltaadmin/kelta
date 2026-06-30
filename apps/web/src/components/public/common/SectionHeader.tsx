/**
 * ============================================================
 * KELTA Enterprise Platform
 * Module      : UI Components
 * Component   : SectionHeader
 * File        : SectionHeader.tsx
 * Purpose     : Standard reusable section heading.
 * ============================================================
 */

import clsx from 'clsx';

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
  return (
    <div
      className={clsx(
        'mb-14',
        align === 'center' ? 'text-center' : 'text-left',
        className,
      )}
    >
      {badge && (
        <span className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
          {badge}
        </span>
      )}

      <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}