import type { RoleProfileDefinition } from '../types';
import type { PermissionGroup } from './permission-groups';

/**
 * Enterprise Role Profiles
 *
 * A Role Profile is a reusable bundle of
 * Permission Groups.
 *
 * Multiple roles can share the same profile,
 * reducing duplication and simplifying RBAC
 * maintenance.
 */

function profile(
  id: string,
  displayName: string,
  description: string,
  permissionGroups: readonly PermissionGroup[],
  options?: {
    system?: boolean;
    icon?: string;
    color?: string;
  },
): RoleProfileDefinition {
  return {
    id,
    displayName,
    description,
    permissionGroups,
    system: options?.system ?? true,
    icon: options?.icon,
    color: options?.color,
  };
}

export const ROLE_PROFILES = {
  PLATFORM_ADMIN_PROFILE: profile(
    'PLATFORM_ADMIN_PROFILE',
    'Platform Administrator',
    'Complete platform administration.',
    [
      'USER_MANAGEMENT',
      'ROLE_MANAGEMENT',
      'SETTINGS_MANAGEMENT',
      'CMS_MANAGEMENT',
      'MEMBER_MANAGEMENT',
      'APPLICATION_MANAGEMENT',
      'DISTRICT_MANAGEMENT',
      'COMMITTEE_MANAGEMENT',
      'MEETING_MANAGEMENT',
      'EVENT_MANAGEMENT',
      'PAYMENT_MANAGEMENT',
      'CERTIFICATE_MANAGEMENT',
      'DOCUMENT_MANAGEMENT',
      'REPORT_MANAGEMENT',
      'NOTIFICATION_MANAGEMENT',
      'AUDIT_MANAGEMENT',
    ],
    {
      icon: 'shield',
      color: '#dc2626',
    },
  ),

  STATE_EXECUTIVE_PROFILE: profile(
    'STATE_EXECUTIVE_PROFILE',
    'State Executive',
    'State level administration.',
    [
      'MEMBER_MANAGEMENT',
      'APPLICATION_MANAGEMENT',
      'DISTRICT_MANAGEMENT',
      'COMMITTEE_MANAGEMENT',
      'MEETING_MANAGEMENT',
      'EVENT_MANAGEMENT',
      'DOCUMENT_MANAGEMENT',
      'REPORT_MANAGEMENT',
      'NOTIFICATION_MANAGEMENT',
    ],
    {
      icon: 'building',
      color: '#2563eb',
    },
  ),

  DISTRICT_EXECUTIVE_PROFILE: profile(
    'DISTRICT_EXECUTIVE_PROFILE',
    'District Executive',
    'District administration.',
    [
      'MEMBER_MANAGEMENT',
      'APPLICATION_MANAGEMENT',
      'MEETING_MANAGEMENT',
      'DOCUMENT_MANAGEMENT',
      'REPORT_MANAGEMENT',
      'NOTIFICATION_MANAGEMENT',
    ],
    {
      icon: 'map',
      color: '#16a34a',
    },
  ),

  COMMITTEE_PROFILE: profile(
    'COMMITTEE_PROFILE',
    'Committee',
    'Committee management.',
    ['MEETING_MANAGEMENT', 'DOCUMENT_MANAGEMENT', 'REPORT_MANAGEMENT'],
    {
      icon: 'users',
      color: '#9333ea',
    },
  ),

  AUDITOR_PROFILE: profile(
    'AUDITOR_PROFILE',
    'Auditor',
    'Audit and reporting.',
    ['AUDIT_MANAGEMENT', 'REPORT_MANAGEMENT'],
    {
      icon: 'clipboard-check',
      color: '#ea580c',
    },
  ),

  MEMBER_PROFILE: profile(
    'MEMBER_PROFILE',
    'Member',
    'Regular association member.',
    [],
    {
      icon: 'user',
      color: '#64748b',
    },
  ),

  PUBLIC_PROFILE: profile(
    'PUBLIC_PROFILE',
    'Public',
    'Unauthenticated visitor.',
    [],
    {
      icon: 'globe',
      color: '#94a3b8',
    },
  ),
} as const;

Object.freeze(ROLE_PROFILES);

export type RoleProfile = keyof typeof ROLE_PROFILES;

export function getRoleProfile(profile: RoleProfile): RoleProfileDefinition {
  return ROLE_PROFILES[profile];
}
