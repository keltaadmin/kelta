/**
 * ============================================================
 * KELTA Enterprise Platform
 * Public Website
 * Home Page Type Definitions
 * ============================================================
 */

export interface HeroButton {
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
}

export interface HeroStatistic {
  value: string;
  label: string;
}

export interface HomeHero {
  badge: string;
  title: string;
  subtitle: string;
  buttons: HeroButton[];
  statistics: HeroStatistic[];
}

export interface QuickAction {
  id: string;
  title: string;
  description: string;
  href: string;
  iconKey: string;
}

export interface AboutPreview {
  title: string;
  subtitle: string;
  description: string;
  button: HeroButton;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconKey: string;
}

export interface StatisticsItem {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  iconKey: string;
}

export interface LeadershipPreviewMember {
  id: string;
  name: string;
  designation: string;
  image?: string | null;
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  date: string;
  href: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  location: string;
  href: string;
}

export interface DistrictPreview {
  title: string;
  description: string;
  totalDistricts: number;

  button: HeroButton;
}

export interface DownloadPreview {
  title: string;
  description: string;

  button: HeroButton;
}

export interface GalleryPreview {
  title: string;
  description: string;

  button: HeroButton;
}

export interface PartnersSection {
  title: string;
  description: string;
}

export interface CTASection {
  badge?: string;

  title: string;

  description: string;

  primaryButton: HeroButton;

  secondaryButton: HeroButton;
}