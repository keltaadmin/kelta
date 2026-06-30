/**
 * ============================================================
 * KELTA Enterprise Platform
 * Public Website
 * Home - Leadership Preview
 * ============================================================
 */

import Link from 'next/link';

import { leadershipPreview } from '@/data/public/home';

import {
  Container,
  PageSection,
} from '@/components/layout';

import LeaderCard from '@/components/public/common/LeaderCard';
import SectionHeader from '@/components/public/common/SectionHeader';
import { Button } from '@/components/ui/button';

export default function LeadershipPreviewSection() {
  return (
    <PageSection className="bg-white">
      <Container>

        <SectionHeader
          badge="Leadership"
          title="Meet the State Leadership"
          description="The elected team leading KELTA across Kerala."
        />

        <div className="grid gap-8 md:grid-cols-3">

          {leadershipPreview.map((leader) => (
            <LeaderCard
              key={leader.id}
              name={leader.name}
              designation={leader.designation}
              image={leader.image}
            />
          ))}

        </div>

        <div className="mt-12 text-center">

          <Button
            asChild
            size="lg"
          >
            <Link href="/about">
              View Full Leadership
            </Link>
          </Button>

        </div>

      </Container>
    </PageSection>
  );
}