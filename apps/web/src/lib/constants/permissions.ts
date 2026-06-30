import { Permission } from '@/types/permission';

export const permissions: Permission[] = [
  {
    id: 'member.view',
    name: 'View Member',
    description: 'View member records',
  },
  {
    id: 'member.edit',
    name: 'Edit Member',
    description: 'Edit member records',
  },
  {
    id: 'application.approve',
    name: 'Approve Application',
    description: 'Approve membership applications',
  },
  {
    id: 'finance.view',
    name: 'View Finance',
    description: 'Access finance data',
  },
];