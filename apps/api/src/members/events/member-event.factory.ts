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
}
