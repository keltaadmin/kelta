/**
 * ============================================================
 * KELTA Enterprise Platform
 * Public Website
 * Home - Hero
 * ============================================================
 */

import { HomeHero } from '@/types/public/home.types';

export const hero: HomeHero = {
  badge: 'Kerala Local Body Technical Assistants Association',

  title:
   'Empowering Digital Local Governance Across Kerala',

  subtitle:
  'KELTA is the professional association of Technical Assistants driving e-governance, digital public services, IT infrastructure, digital transformation and citizen-centric technology across Kerala’s Local Self Government Institutions.',

  buttons: [
    {
      label: 'Become a Member',
      href: '/membership',
      variant: 'primary',
    },
    {
      label: 'Explore KELTA',
      href: '/about',
      variant: 'secondary',
    },
    
  ],
  statistics: [
    {
      value: '14',
      label: 'District Units',
    },
    {
      value: '1000+',
      label: 'Members',
    },
    {
      value: '300+',
      label: 'Digital Services',
    },
    {
      value: '24/7',
      label: 'Technical Support',
    },
  ],
};