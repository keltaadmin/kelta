import { ROLE_LEVELS } from './role-levels';
import { ROLE_PROFILES } from './role-profiles';

import type { RoleLevel } from './role-levels';
import type { RoleDefinition } from '../types';
import type { RoleScope } from '../types';

/**
 * Enterprise Role Catalog
 *
 * Each role references a reusable
 * Role Profile.
 */

function role(
  id: string,
  displayName: string,
  description: string,
  scope: RoleScope,
  hierarchy: RoleLevel,
  profile: keyof typeof ROLE_PROFILES,
  options?: {
    configurable?: boolean;
    visibleInDirectory?: boolean;
    defaultLandingPage?: string;
  },
): RoleDefinition {
  return {
    id,

    displayName,

    description,

    hierarchy,

    scope,

    system: true,

    assignableBy: [],

    permissionGroups: ROLE_PROFILES[profile].permissionGroups,

    configurable: options?.configurable ?? false,

    visibleInDirectory: options?.visibleInDirectory ?? true,

    defaultLandingPage: options?.defaultLandingPage,
  };
}

export const ROLES = {
  SUPER_ADMIN: role(
    'SUPER_ADMIN',
    'Super Administrator',
    'Full platform access.',
    'SYSTEM',
    ROLE_LEVELS.SUPER_ADMIN,
    'PLATFORM_ADMIN_PROFILE',
  ),

  PLATFORM_ADMIN: role(
    'PLATFORM_ADMIN',
    'Platform Administrator',
    'Platform administration.',
    'SYSTEM',
    ROLE_LEVELS.PLATFORM_ADMIN,
    'PLATFORM_ADMIN_PROFILE',
  ),

  STATE_PRESIDENT: role(
    'STATE_PRESIDENT',
    'State President',
    'State executive.',
    'STATE',
    ROLE_LEVELS.STATE_PRESIDENT,
    'STATE_EXECUTIVE_PROFILE',
  ),

  STATE_GENERAL_SECRETARY: role(
    'STATE_GENERAL_SECRETARY',
    'State General Secretary',
    'State executive.',
    'STATE',
    ROLE_LEVELS.STATE_GENERAL_SECRETARY,
    'STATE_EXECUTIVE_PROFILE',
  ),

  DISTRICT_PRESIDENT: role(
    'DISTRICT_PRESIDENT',
    'District President',
    'District executive.',
    'DISTRICT',
    ROLE_LEVELS.DISTRICT_PRESIDENT,
    'DISTRICT_EXECUTIVE_PROFILE',
  ),

  DISTRICT_SECRETARY: role(
    'DISTRICT_SECRETARY',
    'District Secretary',
    'District executive.',
    'DISTRICT',
    ROLE_LEVELS.DISTRICT_SECRETARY,
    'DISTRICT_EXECUTIVE_PROFILE',
  ),

  COMMITTEE_CONVENOR: role(
    'COMMITTEE_CONVENOR',
    'Committee Convenor',
    'Committee leadership.',
    'COMMITTEE',
    ROLE_LEVELS.COMMITTEE_CONVENOR,
    'COMMITTEE_PROFILE',
  ),

  AUDITOR: role(
    'AUDITOR',
    'Auditor',
    'Audit access.',
    'STATE',
    ROLE_LEVELS.AUDITOR,
    'AUDITOR_PROFILE',
  ),

  MEMBER: role(
    'MEMBER',
    'Member',
    'Regular member.',
    'MEMBER',
    ROLE_LEVELS.MEMBER,
    'MEMBER_PROFILE',
  ),

  PUBLIC: role(
    'PUBLIC',
    'Public',
    'Unauthenticated visitor.',
    'PUBLIC',
    ROLE_LEVELS.PUBLIC,
    'PUBLIC_PROFILE',
  ),
} as const;

Object.freeze(ROLES);

export type RoleId = keyof typeof ROLES;

export function getRole(role: RoleId): RoleDefinition {
  return ROLES[role];
}
