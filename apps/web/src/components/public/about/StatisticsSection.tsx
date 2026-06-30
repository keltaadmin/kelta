/**
 * ============================================================
 * KELTA Enterprise Platform
 * Module      : Public Website
 * Feature     : About
 * Component   : Statistics Section
 * ============================================================
 */

import { statistics } from '@/data/public/about';

import {
  Container,
  PageSection,
} from '@/components/layout';

import SectionHeader from '@/components/public/common/SectionHeader';
import StatisticCard from '@/components/public/common/StatisticCard';
import IconWrapper from '@/components/public/common/IconWrapper';

import {
  Map,
  Users,
  Award,
  GraduationCap,
} from 'lucide-react';

const ICONS = {
  map: Map,
  users: Users,
  award: Award,
  graduationCap: GraduationCap,
};

export default function StatisticsSection() {
  return (
    <PageSection className="bg-slate-50">
      <Container>
        <SectionHeader
          badge="KELTA"
          title={statistics.title}
          description={statistics.subtitle}
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {statistics.items.map((item) => {
            const Icon =
              ICONS[item.iconKey as keyof typeof ICONS];

            return (
              <StatisticCard
                key={item.id}
                value={item.value}
                suffix={item.suffix}
                label={item.label}
                icon={
                  Icon ? (
                    <IconWrapper>
                      <Icon size={28} />
                    </IconWrapper>
                  ) : null
                }
              />
            );
          })}
        </div>
      </Container>
    </PageSection>
  );
}