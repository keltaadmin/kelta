/**
 * ============================================================
 * KELTA Enterprise Platform
 * Module      : UI Components
 * Component   : PageHero
 * File        : PageHero.tsx
 * Purpose     : Reusable hero component for all public pages.
 * ============================================================
 */

import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

export interface HeroStatistic {
  value: string;
  label: string;
}

export interface HeroAction {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary';
}

interface PageHeroProps {
  badge?: string;
  title: string;
  description: string;
  image: string;

  primaryAction?: HeroAction;
  secondaryAction?: HeroAction;

  statistics?: HeroStatistic[];
}

export default function PageHero({
  badge,
  title,
  description,
  image,
  primaryAction,
  secondaryAction,
  statistics = [],
}: PageHeroProps) {
  return (
    <Section className="relative overflow-hidden bg-gradient-to-br from-sky-700 via-sky-600 to-cyan-600 text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,.18),transparent_40%)]" />

      <Container className="relative py-20">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left */}
          <div>
            {badge && (
              <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
                {badge}
              </span>
            )}

            <h1 className="mt-6 text-5xl font-extrabold leading-tight lg:text-6xl">
              {title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-sky-100">
              {description}
            </p>

            {(primaryAction || secondaryAction) && (
              <div className="mt-10 flex flex-wrap gap-4">
                {primaryAction && (
                  <Button asChild size="lg">
                    <Link href={primaryAction.href}>
                      {primaryAction.label}
                    </Link>
                  </Button>
                )}

                {secondaryAction && (
                  <Button
                    asChild
                    size="lg"
                    variant="secondary"
                  >
                    <Link href={secondaryAction.href}>
                      {secondaryAction.label}
                    </Link>
                  </Button>
                )}
              </div>
            )}

            {statistics.length > 0 && (
              <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
                {statistics.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur"
                  >
                    <p className="text-2xl font-bold">
                      {item.value}
                    </p>

                    <p className="mt-1 text-sm text-sky-100">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right */}
          <div className="relative h-[520px]">
            <Image
              src={image}
              alt={title}
              fill
              priority
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}