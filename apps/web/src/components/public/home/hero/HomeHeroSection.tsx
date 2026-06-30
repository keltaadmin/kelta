/**
 * ============================================================
 * KELTA Enterprise Platform
 * Public Website
 * Home Hero Section
 * ============================================================
 */

import Container from '@/components/layout/Container';
import PageSection from '@/components/layout/PageSection';
import HeroContent from './HeroContent';
import HeroIllustration from './HeroIllustration';

export default function HomeHeroSection() {
  return (
    <PageSection className="overflow-hidden bg-gradient-to-b from-sky-50 to-white">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <HeroContent />
          <HeroIllustration />
        </div>
      </Container>
    </PageSection>
  );
}