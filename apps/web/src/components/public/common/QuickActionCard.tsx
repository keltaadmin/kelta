/**
 * ============================================================
 * KELTA Enterprise Platform
 * Public UI Library
 * Quick Action Card
 * ============================================================
 */

import Link from 'next/link';

interface QuickActionCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

export default function QuickActionCard({
  title,
  description,
  href,
  icon,
}: QuickActionCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl"
    >
      <div className="mb-5">{icon}</div>

      <h3 className="text-xl font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-600">
        {description}
      </p>
    </Link>
  );
}