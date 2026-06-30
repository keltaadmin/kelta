/**
 * ============================================================
 * KELTA Enterprise Platform
 * Module      : Shared Components
 * Component   : StatsCard
 * File        : StatsCard.tsx
 * Purpose     : Reusable statistics card.
 * ============================================================
 */

interface StatsCardProps {
  value: string | number;
  label: string;
  icon?: React.ReactNode;
  className?: string;
}

export default function StatsCard({
  value,
  label,
  icon,
  className = '',
}: StatsCardProps) {
  return (
    <div
      className={`
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
        ${className}
      `}
    >
      {icon && (
        <div className="mb-4 text-sky-600">
          {icon}
        </div>
      )}

      <h3 className="text-3xl font-bold text-slate-900">
        {value}
      </h3>

      <p className="mt-2 text-sm font-medium text-slate-500">
        {label}
      </p>
    </div>
  );
}