/**
 * ============================================================
 * KELTA Enterprise Platform
 * Module      : Public Website
 * Feature     : About
 * Component   : CTA Section
 * ============================================================
 */

import Link from 'next/link';

import { ABOUT_DATA } from '@/data/public/about.data';

import {
  Container,
  PageSection,
} from '@/components/layout';

import { Button } from '@/components/ui/button';

export default function AboutCTASection() {
  const { cta } = ABOUT_DATA;

  return (
    <PageSection className="bg-sky-700 text-white">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold">
            {cta.title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-sky-100">
            {cta.subtitle}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {cta.buttons.map((button) => (
              <Button
                key={button.href}
                asChild
                variant={
                  button.variant === 'primary'
                    ? 'default'
                    : 'outline'
                }
              >
                <Link href={button.href}>
                  {button.label}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </Container>
    </PageSection>
  );
}
