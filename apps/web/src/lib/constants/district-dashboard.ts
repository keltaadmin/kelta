import {
  DistrictStat,
  DistrictMember,
  MembershipApplication,
} from '@/types/district';

export const districtStats: DistrictStat[] = [
  {
    title: 'Total Members',
    value: 542,
  },
  {
    title: 'Pending Applications',
    value: 17,
  },
  {
    title: 'Active Members',
    value: 501,
  },
  {
    title: 'Meetings This Month',
    value: 3,
  },
];

export const districtMembers: DistrictMember[] = [
  {
    id: '1',
    name: 'John Mathew',
    membershipNo: 'KELTA-TVM-001',
    status: 'Active',
  },
  {
    id: '2',
    name: 'Anoop Kumar',
    membershipNo: 'KELTA-TVM-002',
    status: 'Pending',
  },
];

export const applicationQueue: MembershipApplication[] = [
  {
    id: '1',
    applicantName: 'Rajesh',
    applicationNo: 'KELTA-TVM-MA-0001',
    district: 'Trivandrum',
    status: 'Under Review',
  },
];