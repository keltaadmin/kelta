import { BadRequestException, Injectable } from '@nestjs/common';

import { MemberStatus } from '@prisma/client';

/**
 * Enterprise Member Lifecycle Service
 *
 * Centralizes all membership lifecycle rules.
 *
 * This service contains business rules only.
 * It does NOT access the database.
 */
@Injectable()
export class MemberLifecycleService {
  /**
   * Allowed lifecycle transitions.
   */
  private readonly transitions: Readonly<
    Record<MemberStatus, readonly MemberStatus[]>
  > = Object.freeze({
    PENDING: [MemberStatus.ACTIVE, MemberStatus.INACTIVE],

    ACTIVE: [
      MemberStatus.INACTIVE,
      MemberStatus.SUSPENDED,
      MemberStatus.RETIRED,
    ],

    INACTIVE: [MemberStatus.ACTIVE, MemberStatus.RETIRED],

    SUSPENDED: [MemberStatus.ACTIVE, MemberStatus.RETIRED],

    RETIRED: [],
  });

  /**
   * Returns true when a transition is permitted.
   */
  canTransition(from: MemberStatus, to: MemberStatus): boolean {
    if (from === to) {
      return true;
    }

    return this.transitions[from].includes(to);
  }

  /**
   * Throws when a transition is invalid.
   */
  ensureTransition(from: MemberStatus, to: MemberStatus): void {
    if (!this.canTransition(from, to)) {
      throw new BadRequestException(
        `Invalid member status transition: ${from} → ${to}`,
      );
    }
  }

  activate(current: MemberStatus): MemberStatus {
    this.ensureTransition(current, MemberStatus.ACTIVE);

    return MemberStatus.ACTIVE;
  }

  suspend(current: MemberStatus): MemberStatus {
    this.ensureTransition(current, MemberStatus.SUSPENDED);

    return MemberStatus.SUSPENDED;
  }

  restore(current: MemberStatus): MemberStatus {
    this.ensureTransition(current, MemberStatus.ACTIVE);

    return MemberStatus.ACTIVE;
  }

  deactivate(current: MemberStatus): MemberStatus {
    this.ensureTransition(current, MemberStatus.INACTIVE);

    return MemberStatus.INACTIVE;
  }

  retire(current: MemberStatus): MemberStatus {
    this.ensureTransition(current, MemberStatus.RETIRED);

    return MemberStatus.RETIRED;
  }

  /**
   * Calculates the next membership expiry.
   */
  renew(expiryDate: Date | null, years = 1): Date {
    const base =
      expiryDate && expiryDate > new Date() ? expiryDate : new Date();

    const next = new Date(base);

    next.setFullYear(next.getFullYear() + years);

    return next;
  }
}
