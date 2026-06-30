/**
 * ============================================================
 * KELTA Enterprise Platform
 * Module      : Public Website
 * Feature     : About
 * Component   : Timeline Section
 * ============================================================
 */

import { timeline } from '@/data/public/about';

import {
  Container,
  PageSection,
} from '@/components/layout';

import SectionHeader from '@/components/public/common/SectionHeader';
import TimelineCard from '@/components/public/common/TimelineCard';

export default function TimelineSection() {
  return (
    <PageSection className="bg-white">
      <Container>
        <SectionHeader
          badge="Journey"
          title={timeline.title}
          description={timeline.subtitle}
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {timeline.items.map((item) => (
            <TimelineCard
              key={item.year}
              year={item.year}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Container>
    </PageSection>
  );
}