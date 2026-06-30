/**
 * ============================================================
 * KELTA Enterprise Platform
 * Home
 * About Preview
 * ============================================================
 */

import Link from 'next/link';

import { aboutPreview } from '@/data/public/home';

import {
  Container,
  PageSection,
} from '@/components/layout';

import SectionHeader from '@/components/public/common/SectionHeader';
import { Button } from '@/components/ui/button';

export default function AboutPreviewSection() {
  return (
    <PageSection className="bg-white">

      <Container>

        <SectionHeader
          badge="About KELTA"
          title={aboutPreview.title}
          description={aboutPreview.subtitle}
        />

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-lg leading-8 text-slate-600">
            {aboutPreview.description}
          </p>

          <Button
            asChild
            className="mt-10"
            size="lg"
          >
            <Link href={aboutPreview.button.href}>
              {aboutPreview.button.label}
            </Link>
          </Button>

        </div>

      </Container>

    </PageSection>
  );
}