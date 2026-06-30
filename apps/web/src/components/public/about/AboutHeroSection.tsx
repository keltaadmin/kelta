/**
 * ============================================================
 * KELTA Enterprise Platform
 * Module      : Public Website
 * Feature     : About
 * Component   : About Hero Section
 * File        : AboutHeroSection.tsx
 * Purpose     : Hero section for the About page.
 * ============================================================
 */

import Link from 'next/link';

import {
  hero,
  statistics,
} from '@/data/public/about';

export default function AboutHeroSection() {
  

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-sky-50">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-sky-100/40 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-16 px-6 py-20 lg:flex-row lg:items-center lg:px-8">
        {/* Left */}
        <div className="flex-1">
          <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-sky-700">
            About KELTA
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            {hero.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            {hero.subtitle}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            {hero.buttons.map((button) => (
              <Link
                key={button.href}
                href={button.href}
                className={
                  button.variant === 'primary'
                    ? 'rounded-xl bg-sky-700 px-6 py-3 font-semibold text-white transition hover:bg-sky-800'
                    : 'rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100'
                }
              >
                {button.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="grid flex-1 grid-cols-2 gap-6">
          {statistics.items.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-4xl font-bold text-sky-700">
                {item.value}
                {item.suffix}
              </p>

              <p className="mt-3 text-sm font-medium uppercase tracking-wide text-slate-500">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}