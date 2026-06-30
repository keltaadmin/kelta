/**
 * ============================================================
 * KELTA Enterprise Platform
 * Public Home Page
 * ============================================================
 */

import HomeHeroSection from '@/components/public/home/HomeHeroSection';
import QuickActionsSection from '@/components/public/home/QuickActionsSection';
import AboutPreviewSection from '@/components/public/home/AboutPreviewSection';
import FeaturesSection from '@/components/public/home/FeaturesSection';
import StatisticsSection from '@/components/public/home/StatisticsSection';

import LatestNewsSection from '@/components/public/home/LatestNewsSection';
import UpcomingEventsSection from '@/components/public/home/UpcomingEventsSection';
import LeadershipPreviewSection from '@/components/public/home/LeadershipPreviewSection';

export default function HomePage() {
  return (
    <>
      <HomeHeroSection />

      <QuickActionsSection />

      <AboutPreviewSection />

      <FeaturesSection />

      <StatisticsSection />

      <LatestNewsSection />

      <UpcomingEventsSection />

      <LeadershipPreviewSection />
    </>
  );
}