/**
 * ============================================================
 * KELTA Enterprise Platform
 * Public Website
 * About Page - CTA
 * ============================================================
 */

import { AboutContent } from '@/types/public/about.types';

export const cta: AboutContent['cta'] = {
  title: 'Become a Part of KELTA',

  subtitle:
    'Join Kerala&apos;s professional network of Technical Assistants and contribute towards innovation, collaboration and excellence in Local Self Government Institutions.',

  buttons: [
    {
      label: 'Apply for Membership',
      href: '/membership',
      variant: 'primary',
    },
    {
      label: 'Contact Us',
      href: '/contact',
      variant: 'secondary',
    },
  ],
};