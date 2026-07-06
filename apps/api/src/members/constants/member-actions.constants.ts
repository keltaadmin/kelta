/**
 * Enterprise Member Lifecycle Actions
 */

export const MEMBER_ACTION = Object.freeze({
  CREATE: 'member.create',
  UPDATE: 'member.update',

  ACTIVATE: 'member.activate',

  DEACTIVATE: 'member.deactivate',

  SUSPEND: 'member.suspend',

  RESTORE: 'member.restore',

  RETIRE: 'member.retire',

  RENEW: 'member.renew',

  TRANSFER: 'member.transfer',

  VERIFY: 'member.verify',
} as const);

export type MemberAction = (typeof MEMBER_ACTION)[keyof typeof MEMBER_ACTION];
