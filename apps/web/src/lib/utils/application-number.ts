export function generateApplicationNumber(
  districtCode: string,
  sequence: number
) {
  return `KELTA-${districtCode}-MA-${String(
    sequence
  ).padStart(4, '0')}`;
}