/**
 * ============================================================
 * KELTA Enterprise Platform
 * Public UI Library
 * Component : StatisticCard
 * ============================================================
 */

import { ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

interface StatisticCardProps {
  icon?: ReactNode;
  value: string | number;
  suffix?: string;
  label: string;
  className?: string;
}

export default function StatisticCard({
  icon,
  value,
  suffix,
  label,
  className,
}: StatisticCardProps) {
  return (
    <div
      className={cn(
        'group rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl',
        className
      )}
    >
      {icon && (
        <div className="mb-6 flex justify-center">
          {icon}
        </div>
      )}

      <div className="text-5xl font-bold text-sky-700">
        {value}
        {suffix}
      </div>

      <p className="mt-4 text-base font-medium text-slate-600">
        {label}
      </p>
    </div>
  );
}