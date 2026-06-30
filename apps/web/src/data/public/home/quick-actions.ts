/**
 * ============================================================
 * KELTA Enterprise Platform
 * Public Website
 * Home - Quick Actions
 * ============================================================
 */

import { QuickAction } from '@/types/public/home.types';

export const quickActions: QuickAction[] = [
  {
    id: 'QA001',
    title: 'Become a Member',
    description: 'Apply for KELTA membership online.',
    href: '/membership',
    iconKey: 'userPlus',
  },
  {
    id: 'QA002',
    title: 'Member Login',
    description: 'Access your member dashboard.',
    href: '/login',
    iconKey: 'logIn',
  },
  {
    id: 'QA003',
    title: 'District Directory',
    description: 'Browse all district committees.',
    href: '/districts',
    iconKey: 'mapPinned',
  },
  {
    id: 'QA004',
    title: 'Downloads',
    description: 'Circulars, forms and publications.',
    href: '/downloads',
    iconKey: 'download',
  },
];