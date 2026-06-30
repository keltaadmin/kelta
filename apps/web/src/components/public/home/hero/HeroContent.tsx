/**
 * ============================================================
 * KELTA Enterprise Platform
 * Public Website
 * Hero Content
 * ============================================================
 */

import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { hero } from '@/data/public/home';

export default function HeroContent() {
  return (
    <div className="space-y-8">
      <span className="inline-flex rounded-full bg-sky-100 px-4 py-1 text-sm font-semibold text-sky-700">
        {hero.badge}
      </span>

      <h1 className="text-4xl font-bold leading-tight text-slate-900 lg:text-6xl">
        {hero.title}
      </h1>

      <p className="max-w-2xl text-lg leading-8 text-slate-600">
        {hero.subtitle}
      </p>

      <div className="flex flex-wrap gap-4">
        {hero.buttons.map((button) => (
          <Button key={button.href} asChild>
            <Link href={button.href}>{button.label}</Link>
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6 pt-8 sm:grid-cols-4">
        {hero.statistics.map((stat) => (
          <div key={stat.label}>
            <div className="text-2xl font-bold text-sky-700">
              {stat.value}
            </div>

            <div className="text-sm text-slate-600">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}