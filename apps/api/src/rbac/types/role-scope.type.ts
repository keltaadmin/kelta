/**
 * Enterprise Role Scopes
 *
 * Defines the organizational scope where
 * a role is valid.
 */
export const ROLE_SCOPES = {
  SYSTEM: 'SYSTEM',

  STATE: 'STATE',

  DISTRICT: 'DISTRICT',

  COMMITTEE: 'COMMITTEE',

  MEMBER: 'MEMBER',

  PUBLIC: 'PUBLIC',
} as const;

export type RoleScope =
  (typeof ROLE_SCOPES)[keyof typeof ROLE_SCOPES];
