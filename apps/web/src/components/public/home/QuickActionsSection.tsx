/**
 * ============================================================
 * KELTA Enterprise Platform
 * Public Website
 * Home - Quick Actions Section
 * ============================================================
 */

import {
  Download,
  LogIn,
  MapPinned,
  UserPlus,
} from 'lucide-react';

import { quickActions } from '@/data/public/home';

import {
  Container,
  PageSection,
} from '@/components/layout';

import IconWrapper from '@/components/public/common/IconWrapper';
import QuickActionCard from '@/components/public/common/QuickActionCard';
import SectionHeader from '@/components/public/common/SectionHeader';

const ICONS = {
  userPlus: UserPlus,
  logIn: LogIn,
  mapPinned: MapPinned,
  download: Download,
};

export default function QuickActionsSection() {
  return (
    <PageSection className="bg-white">
      <Container>

        <SectionHeader
          badge="Quick Access"
          title="Everything You Need in One Place"
          description="Quickly access the most frequently used services of the KELTA platform."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {quickActions.map((item) => {

            const Icon =
              ICONS[item.iconKey as keyof typeof ICONS];

            return (
              <QuickActionCard
                key={item.id}
                title={item.title}
                description={item.description}
                href={item.href}
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