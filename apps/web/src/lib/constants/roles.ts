import { Role } from '@/types/role';

export const roles: Role[] = [
  {
    id: 'member',
    name: 'Member',
    workspace: 'member',
    permissions: [],
  },

  {
    id: 'district-secretary',
    name: 'District Secretary',
    workspace: 'district',
    permissions: [
      'member.view',
      'member.edit',
      'application.approve',
    ],
  },

  {
    id: 'state-secretary',
    name: 'State Secretary',
    workspace: 'state',
    permissions: [
      'member.view',
      'member.edit',
      'application.approve',
      'finance.view',
    ],
  },

  {
    id: 'system-admin',
    name: 'System Admin',
    workspace: 'admin',
    permissions: ['*'],
  },
];