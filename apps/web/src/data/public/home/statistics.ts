/**
 * ============================================================
 * KELTA Enterprise Platform
 * Public Website
 * Home - Statistics
 * ============================================================
 */

import { StatisticsItem } from '@/types/public/home.types';

export const statistics: StatisticsItem[] = [
  {
    id: 'STAT001',
    label: 'District Units',
    value: 14,
    iconKey: 'map',
  },
  {
    id: 'STAT002',
    label: 'Members',
    value: 1100,
    suffix: '+',
    iconKey: 'users',
  },
  {
    id: 'STAT003',
    label: 'Years',
    value: 13,
    suffix: '+',
    iconKey: 'award',
  },
  {
    id: 'STAT004',
    label: 'Training Programs',
    value: 300,
    suffix: '+',
    iconKey: 'graduationCap',
  },
];