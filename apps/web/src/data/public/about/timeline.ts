/**
 * ============================================================
 * KELTA Enterprise Platform
 * Public Website
 * About Page - Timeline
 * ============================================================
 */

import { AboutContent } from '@/types/public/about.types';

export const timeline: AboutContent['timeline'] = {
  title: 'Our Journey',

  subtitle:
    'A timeline highlighting the important milestones in the growth and evolution of KELTA.',

  items: [
    {
      year: '2012',
      title: 'Association Founded',
      description:
        'KELTA was established to unite Technical Assistants serving Local Self Government Institutions across Kerala.',
    },
    {
      year: '2013',
      title: 'District Committees Formed',
      description:
        'District committees were constituted across Kerala, strengthening coordination and member representation.',
    },
    {
      year: '2015',
      title: 'Professional Development Initiatives',
      description:
        'Regular technical training programmes, seminars and workshops were introduced for members.',
    },
    {
      year: '2021',
      title: 'Digital Transformation',
      description:
        'KELTA expanded its digital initiatives to support e-Governance platforms and online member services.',
    },
    {
      year: '2026',
      title: 'Enterprise Platform Development',
      description:
        'Development of the KELTA Enterprise Platform to provide integrated digital services for members and the association.',
    },
  ],
};