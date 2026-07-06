import { Injectable } from '@nestjs/common';

import {
  MEMBER_EVENT,
  type MemberEventType,
} from '../constants';

import type { MemberEvent } from '../interfaces';

@Injectable()
export class MemberEventFactory {
  create(
    type: MemberEventType,
    memberId: string,
    performedBy?: string,
    metadata?: Readonly<Record<string, unknown>>,
  ): MemberEvent {
    return {
      type,
      memberId,
      performedBy,
      occurredAt: new Date(),
      metadata,
    };
  }

  memberActivated(
    memberId: string,
    previousStatus: string,
    performedBy?: string,
  ): MemberEvent {
    return this.create(
      MEMBER_EVENT.ACTIVATED,
      memberId,
      performedBy,
      {
        previousStatus,
      },
    );
  }

  memberSuspended(
    memberId: string,
    previousStatus: string,
    performedBy?: string,
  ): MemberEvent {
    return this.create(
      MEMBER_EVENT.SUSPENDED,
      memberId,
      performedBy,
      {
        previousStatus,
      },
    );
  }

  memberRestored(
    memberId: string,
    previousStatus: string,
    performedBy?: string,
  ): MemberEvent {
    return this.create(
      MEMBER_EVENT.RESTORED,
      memberId,
      performedBy,
      {
        previousStatus,
      },
    );
  }

  membershipRenewed(
    memberId: string,
    previousExpiry: Date | null,
    nextExpiry: Date,
    performedBy?: string,
  ): MemberEvent {
    return this.create(
      MEMBER_EVENT.RENEWED,
      memberId,
      performedBy,
      {
        previousExpiry,
        nextExpiry,
      },
    );
  }

  memberRetired(
    memberId: string,
    previousStatus: string,
    performedBy?: string,
  ): MemberEvent {
    return this.create(
      MEMBER_EVENT.RETIRED,
      memberId,
      performedBy,
      {
        previousStatus,
      },
    );
  }
}
