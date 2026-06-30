/**
 * ============================================================
 * KELTA Enterprise Platform
 * Public Website
 * Navigation Configuration
 * ============================================================
 */

export interface NavigationItem {
  label: string;
  href: string;
}

export const publicNavigation: NavigationItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Organisation',
    href: '/organisation',
  },
  {
    label: 'Membership',
    href: '/membership',
  },
  {
    label: 'Downloads',
    href: '/downloads',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];