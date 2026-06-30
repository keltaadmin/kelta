export function hasRole(
  currentRole: string,
  allowedRoles: string[]
): boolean {
  return allowedRoles.includes(
    currentRole
  );
}