import { generateMembershipNumber } from '@/lib/utils/membership-number';

export function approveApplication(
  districtCode: string,
  sequence: number
) {
  return {
    approved: true,
    membershipNumber:
      generateMembershipNumber(
        districtCode,
        sequence
      ),
  };
}

export function rejectApplication(
  remarks: string
) {
  return {
    approved: false,
    remarks,
  };
}