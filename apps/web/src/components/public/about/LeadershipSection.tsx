/**
 * ============================================================
 * KELTA Enterprise Platform
 * Module      : Public Website
 * Feature     : About
 * Component   : Leadership Section
 * ============================================================
 */

import { leadership } from '@/data/public/about';

import {
  Container,
  PageSection,
} from '@/components/layout';

import LeaderCard from '@/components/public/common/LeaderCard';
import SectionHeader from '@/components/public/common/SectionHeader';

export default function LeadershipSection() {
  return (
    <PageSection className="bg-slate-50">
      <Container>
        <SectionHeader
          badge="Leadership"
          title={leadership.title}
          description={leadership.subtitle}
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {leadership.members.map((member) => (
            <LeaderCard
              key={member.id}
              name={member.name}
              designation={member.designation}
              phone={member.phone}
              image={member.image}
            />
          ))}
        </div>
      </Container>
    </PageSection>
  );
}