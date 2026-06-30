import { WorkspaceMenu } from '@/types/menu';

export const portalMenus: WorkspaceMenu[] = [
  {
    workspace: 'member',
    title: 'Member Workspace',
    sections: [
      {
        id: 'member-main',
        title: 'My Workspace',
        items: [
          {
            id: 'dashboard',
            label: 'Dashboard',
            href: '/dashboard',
          },
          {
            id: 'profile',
            label: 'Profile',
            href: '/profile',
          },
          {
            id: 'membership',
            label: 'Membership',
            href: '/membership',
          },
          {
            id: 'payments',
            label: 'Payments',
            href: '/payments',
          },
          {
            id: 'certificates',
            label: 'Certificates',
            href: '/certificates',
          },
          {
            id: 'documents',
            label: 'Documents',
            href: '/documents',
          },
          {
            id: 'notifications',
            label: 'Notifications',
            href: '/notifications',
          },
        ],
      },
    ],
  },

  {
    workspace: 'district',
    title: 'District Workspace',
    sections: [
      {
        id: 'district-main',
        title: 'District Management',
        items: [
          {
            id: 'district-dashboard',
            label: 'Dashboard',
            href: '/district/dashboard',
          },
          {
            id: 'district-members',
            label: 'Members',
            href: '/district/members',
          },
          {
            id: 'district-applications',
            label: 'Applications',
            href: '/district/applications',
          },
          {
            id: 'district-reports',
            label: 'Reports',
            href: '/district/reports',
          },
        ],
      },
    ],
  },

  {
    workspace: 'state',
    title: 'State Workspace',
    sections: [
      {
        id: 'state-main',
        title: 'State Management',
        items: [
          {
            id: 'state-dashboard',
            label: 'Dashboard',
            href: '/state/dashboard',
          },
          {
            id: 'monitoring',
            label: 'District Monitoring',
            href: '/state/monitoring',
          },
          {
            id: 'analytics',
            label: 'Analytics',
            href: '/state/analytics',
          },
        ],
      },
    ],
  },

  {
    workspace: 'admin',
    title: 'Administration',
    sections: [
      {
        id: 'admin-main',
        title: 'System Administration',
        items: [
          {
            id: 'users',
            label: 'Users',
            href: '/admin/users',
          },
          {
            id: 'roles',
            label: 'Roles',
            href: '/admin/roles',
          },
          {
            id: 'permissions',
            label: 'Permissions',
            href: '/admin/permissions',
          },
          {
            id: 'audit',
            label: 'Audit Logs',
            href: '/admin/audit',
          },
          {
            id: 'settings',
            label: 'Settings',
            href: '/admin/settings',
          },
        ],
      },
    ],
  },
];