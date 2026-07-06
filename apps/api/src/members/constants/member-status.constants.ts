import { MemberStatus } from '@prisma/client';

/**
 * Enterprise Member Status Catalog
 */
export const MEMBER_STATUS = Object.freeze({
  PENDING: MemberStatus.PENDING,
  ACTIVE: MemberStatus.ACTIVE,
  INACTIVE: MemberStatus.INACTIVE,
  SUSPENDED: MemberStatus.SUSPENDED,
  RETIRED: MemberStatus.RETIRED,
} as const);

export const ACTIVE_MEMBER_STATUSES = Object.freeze([MEMBER_STATUS.ACTIVE]);

export const NON_ACTIVE_MEMBER_STATUSES = Object.freeze([
  MEMBER_STATUS.PENDING,
  MEMBER_STATUS.INACTIVE,
  MEMBER_STATUS.SUSPENDED,
  MEMBER_STATUS.RETIRED,
]);

export type MemberStatusValue =
  (typeof MEMBER_STATUS)[keyof typeof MEMBER_STATUS];
