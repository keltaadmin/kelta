/**
 * ============================================================
 * KELTA Enterprise Platform
 * Public Website
 * Home - Why Join KELTA
 * ============================================================
 */

import {
  BookOpen,
  GraduationCap,
  HeartHandshake,
  Users,
} from 'lucide-react';

import { features } from '@/data/public/home';

import {
  Container,
  PageSection,
} from '@/components/layout';

import FeatureCard from '@/components/public/common/FeatureCard';
import IconWrapper from '@/components/public/common/IconWrapper';
import SectionHeader from '@/components/public/common/SectionHeader';

const ICONS = {
  graduationCap: GraduationCap,
  heartHandshake: HeartHandshake,
  bookOpen: BookOpen,
  users: Users,
};

export default function FeaturesSection() {
  return (
    <PageSection className="bg-slate-50">
      <Container>

        <SectionHeader
          badge="Why Join"
          title="Why Become a KELTA Member?"
          description="Membership provides opportunities for professional growth, networking, technical excellence and member welfare."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {features.map((feature) => {

            const Icon =
              ICONS[feature.iconKey as keyof typeof ICONS];

            return (
              <FeatureCard
                key={feature.id}
                title={feature.title}
                description={feature.description}
                icon={
                  <IconWrapper>
                    <Icon size={28} />
                  </IconWrapper>
                }
              />
            );

          })}

        </div>

      </Container>
    </PageSection>
  );
}