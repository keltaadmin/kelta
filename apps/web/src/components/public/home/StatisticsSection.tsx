/**
 * ============================================================
 * KELTA Enterprise Platform
 * Home
 * Statistics
 * ============================================================
 */

import {
  Award,
  GraduationCap,
  Map,
  Users,
} from 'lucide-react';

import { statistics } from '@/data/public/home';

import {
  Container,
  PageSection,
} from '@/components/layout';

import IconWrapper from '@/components/public/common/IconWrapper';
import SectionHeader from '@/components/public/common/SectionHeader';
import StatisticCard from '@/components/public/common/StatisticCard';

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
          title="KELTA at a Glance"
          description="A quick overview of our statewide presence and commitment to empowering Technical Assistants."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {statistics.map((item) => {

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