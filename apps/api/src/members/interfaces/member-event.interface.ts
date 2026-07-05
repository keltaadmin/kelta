import type { MemberEventType } from '../constants/member-events.constants';

export interface MemberEvent {

  readonly type: MemberEventType;

  readonly memberId: string;

  readonly performedBy?: string;

  readonly occurredAt: Date;

  readonly metadata?: Readonly<Record<string, unknown>>;
}
