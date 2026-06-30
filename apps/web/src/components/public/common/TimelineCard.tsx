/**
 * ============================================================
 * KELTA Enterprise Platform
 * Public UI Library
 * Component : TimelineCard
 * ============================================================
 */

import { cn } from '@/lib/utils/cn';

interface TimelineCardProps {
  year: string;
  title: string;
  description: string;
  className?: string;
}

export default function TimelineCard({
  year,
  title,
  description,
  className,
}: TimelineCardProps) {
  return (
    <div
      className={cn(
        'relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-sky-200 hover:shadow-xl',
        className
      )}
    >
      <div className="mb-5 inline-flex rounded-full bg-sky-100 px-4 py-1 text-sm font-semibold text-sky-700">
        {year}
      </div>

      <h3 className="mb-4 text-xl font-semibold text-slate-900">
        {title}
      </h3>

      <p className="leading-7 text-slate-600">
        {description}
      </p>
    </div>
  );
}