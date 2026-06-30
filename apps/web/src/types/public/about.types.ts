/**
 * ============================================================
 * KELTA Enterprise Platform
 * Public Website
 * About Page Type Definitions
 * ============================================================
 */

export interface HeroButton {
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
}

export interface HeroSection {
  title: string;
  subtitle: string;
  buttons: HeroButton[];
}

export interface HistorySection {
  title: string;
  description: string;
}

export interface VisionMissionSection {
  title: string;
  subtitle: string;

  vision: string;
  mission: string;
}

export interface AboutObjective {
  id: string;
  title: string;
  description: string;
}

export interface ObjectivesSection {
  title: string;
  subtitle: string;
  items: AboutObjective[];
}

export interface AboutStatistic {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  iconKey: string;
}

export interface StatisticsSection {
  title: string;
  subtitle: string;
  items: AboutStatistic[];
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface TimelineSection {
  title: string;
  subtitle: string;
  items: TimelineItem[];
}

export interface LeadershipMember {
  id: string;
  name: string;
  designation: string;
  phone?: string;
  image?: string | null;
}

export interface LeadershipSection {
  title: string;
  subtitle: string;
  members: LeadershipMember[];
}

export interface CTAButton {
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
}

export interface CTASection {
  title: string;

  subtitle: string;

  buttons: CTAButton[];
}

export interface AboutContent {
  organisationName: string;

  foundedYear: number;

  hero: HeroSection;

  about: HistorySection;

  visionMission: VisionMissionSection;

  objectives: ObjectivesSection;

  statistics: StatisticsSection;

  timeline: TimelineSection;

  leadership: LeadershipSection;

  cta: CTASection;
}