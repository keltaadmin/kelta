import {
  ActivityItem,
  Announcement,
  QuickAction,
  StatCard,
  UpcomingEvent,
} from '@/types/dashboard';

export const memberStats: StatCard[] = [
  {
    title: 'Membership Status',
    value: 'Active',
  },
  {
    title: 'Certificates',
    value: 3,
  },
  {
    title: 'Pending Dues',
    value: '₹0',
  },
  {
    title: 'Notifications',
    value: 5,
  },
];
export const quickActions: QuickAction[] = [
  {
    id: 'renew',
    title: 'Renew Membership',
    href: '/membership',
  },
  {
    id: 'pay',
    title: 'Pay Dues',
    href: '/payments',
  },
  {
    id: 'certificate',
    title: 'View Certificates',
    href: '/certificates',
  },
  {
    id: 'profile',
    title: 'Update Profile',
    href: '/profile',
  },
];

export const recentActivities: ActivityItem[] = [
  {
    id: '1',
    title: 'Membership renewed successfully',
    timestamp: '2 days ago',
  },
  {
    id: '2',
    title: 'Training certificate issued',
    timestamp: '5 days ago',
  },
];

export const announcements: Announcement[] = [
  {
    id: '1',
    title: 'State Conference 2026',
    description:
      'Registration is now open.',
  },
];

export const upcomingEvents: UpcomingEvent[] = [
  {
    id: '1',
    title: 'District Committee Meeting',
    date: '2026-07-15',
    location: 'Trivandrum',
  },
];