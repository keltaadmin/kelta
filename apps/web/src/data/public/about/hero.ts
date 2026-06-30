/**
 * ============================================================
 * KELTA Enterprise Platform
 * Public Website
 * About Page - Hero Data
 * ============================================================
 */

import { AboutContent } from '@/types/public/about.types';

export const hero: AboutContent['hero'] = {
  title: 'Empowering Technical Assistants Across Kerala',

  subtitle:
    'A unified professional association committed to strengthening Local Self Government Institutions through technical excellence, collaboration, digital transformation, professional development and member welfare.',

  buttons: [
    {
      label: 'Become a Member',
      href: '/membership',
      variant: 'primary',
    },
    {
      label: 'View Committees',
      href: '/committees',
      variant: 'secondary',
    },
  ],
};