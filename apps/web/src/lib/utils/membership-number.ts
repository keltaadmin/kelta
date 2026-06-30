export function generateMembershipNumber(
  districtCode: string,
  sequence: number
) {
  return `KELTA-${districtCode}-M-${String(
    sequence
  ).padStart(4, '0')}`;
}