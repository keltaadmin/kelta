/**
 * ============================================================
 * KELTA Enterprise Platform
 * Module      : Public Website
 * Feature     : About
 * Component   : Vision & Mission Section
 * ============================================================
 */

import { visionMission } from '@/data/public/about';

import {
  Container,
  PageSection,
} from '@/components/layout';

import FeatureCard from '@/components/public/common/FeatureCard';
import SectionHeader from '@/components/public/common/SectionHeader';

export default function MissionVisionSection() {
  return (
    <PageSection className="bg-white">
      <Container>
        <SectionHeader
          badge="Our Foundation"
          title={visionMission.title}
          description={visionMission.subtitle}
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <FeatureCard
            title="Our Vision"
            description={visionMission.vision}
          />

          <FeatureCard
            title="Our Mission"
            description={visionMission.mission}
          />
        </div>
      </Container>
    </PageSection>
  );
}