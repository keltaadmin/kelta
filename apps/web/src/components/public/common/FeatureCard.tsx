/**
 * ============================================================
 * KELTA Enterprise Platform
 * Public UI Library
 * Component : FeatureCard
 * ============================================================
 */

import { ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

interface FeatureCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        'group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl',
        className
      )}
    >
      {icon && <div className="mb-6">{icon}</div>}

      <h3 className="mb-4 text-xl font-semibold text-slate-900">
        {title}
      </h3>

      <p className="leading-7 text-slate-600">
        {description}
      </p>
    </div>
  );
}