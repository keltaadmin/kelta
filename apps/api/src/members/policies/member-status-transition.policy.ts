import { MemberStatus } from '@prisma/client';

/**
 * Central policy for validating member status transitions.
 */
export class MemberStatusTransitionPolicy {
  static canTransition(from: MemberStatus, to: MemberStatus): boolean {
    if (from === to) {
      return true;
    }

    const transitions: Record<MemberStatus, readonly MemberStatus[]> = {
      PENDING: [MemberStatus.ACTIVE, MemberStatus.INACTIVE],
      ACTIVE: [
        MemberStatus.INACTIVE,
        MemberStatus.SUSPENDED,
        MemberStatus.RETIRED,
      ],
      INACTIVE: [MemberStatus.ACTIVE, MemberStatus.RETIRED],
      SUSPENDED: [MemberStatus.ACTIVE, MemberStatus.RETIRED],
      RETIRED: [],
    };

    return transitions[from].includes(to);
  }
}
