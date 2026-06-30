/**
 * ============================================================
 * KELTA Enterprise Platform
 * Module      : Public Website
 * Feature     : About
 * File        : page.tsx
 * Purpose     : About page entry point
 * ============================================================
 */

import AboutHeroSection from '@/components/public/about/AboutHeroSection';
import AboutHistorySection from '@/components/public/about/AboutHistorySection';
import MissionVisionSection from '@/components/public/about/MissionVisionSection';
import ObjectivesSection from '@/components/public/about/ObjectivesSection';
import StatisticsSection from '@/components/public/about/StatisticsSection';
import LeadershipSection from '@/components/public/about/LeadershipSection';
import TimelineSection from '@/components/public/about/TimelineSection';
import AboutCTASection from '@/components/public/about/AboutCTASection';


export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />

      <AboutHistorySection />

      <MissionVisionSection />

      <ObjectivesSection />

      <StatisticsSection />

      <TimelineSection />

      <LeadershipSection />

      <AboutCTASection />
    </>
  );
}