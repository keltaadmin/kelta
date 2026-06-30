import { RolePermission } from '@/types/rbac';

export const rolePermissions: RolePermission[] = [
  {
    role: 'member',
    permissions: [
      'profile.view',
      'membership.view',
      'payments.view',
      'certificates.view',
    ],
  },

  {
    role: 'district-secretary',
    permissions: [
      'district.dashboard',
      'members.manage',
      'applications.approve',
      'reports.view',
    ],
  },

  {
    role: 'state-secretary',
    permissions: [
      'state.dashboard',
      'district.monitor',
      'analytics.view',
      'finance.view',
    ],
  },

  {
    role: 'admin',
    permissions: ['*'],
  },
];