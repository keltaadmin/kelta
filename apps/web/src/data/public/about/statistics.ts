/**
 * ============================================================
 * KELTA Enterprise Platform
 * Public Website
 * About Page - Statistics
 * ============================================================
 */

import { AboutContent } from '@/types/public/about.types';

export const statistics: AboutContent['statistics'] = {
  title: 'KELTA at a Glance',

  subtitle:
    'A quick overview of the association&apos;s reach, experience and professional contribution across Kerala.',

  items: [
    {
      id: 'STAT-001',
      label: 'District Units',
      value: 14,
      suffix: '',
      iconKey: 'map',
    },
    {
      id: 'STAT-002',
      label: 'Active Members',
      value: 1100,
      suffix: '+',
      iconKey: 'users',
    },
    {
      id: 'STAT-003',
      label: 'Years of Service',
      value: 13,
      suffix: '+',
      iconKey: 'award',
    },
    {
      id: 'STAT-004',
      label: 'Training Programs',
      value: 300,
      suffix: '+',
      iconKey: 'graduation-cap',
    },
  ],
};