export interface DistrictStat {
  title: string;
  value: string | number;
}

export interface DistrictMember {
  id: string;
  name: string;
  membershipNo: string;
  status: 'Active' | 'Pending' | 'Expired';
}

export interface MembershipApplication {
  id: string;
  applicantName: string;
  applicationNo: string;
  district: string;
  status: string;
}