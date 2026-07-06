import {
  Injectable,
  Logger,
} from '@nestjs/common';

import type { MemberEvent } from '../interfaces';

/**
 * Enterprise Member Timeline Service
 *
 * Responsibilities
 * ----------------
 * - Records member lifecycle events
 * - Provides a stable API for timeline persistence
 * - Keeps timeline logic outside business services
 *
 * Current implementation:
 * - Structured application logging
 *
 * Future implementation:
 * - Persist to MemberTimeline table
 * - Timeline queries
 * - Timeline pagination
 * - Timeline filtering
 */
@Injectable()
export class MemberTimelineService {
  private readonly logger = new Logger(
    MemberTimelineService.name,
  );

  /**
   * Records a timeline event.
   *
   * Future:
   * Persist into the MemberTimeline table.
   */
  async record(
    event: MemberEvent,
  ): Promise<void> {
    this.logger.log(
      JSON.stringify({
        type: 'MEMBER_TIMELINE',

        event,
      }),
    );
  }

  /**
   * Records multiple timeline events.
   */
  async recordMany(
    events: readonly MemberEvent[],
  ): Promise<void> {
    for (const event of events) {
      await this.record(event);
    }
  }

    async recordLifecycle(
    event: MemberEvent,
  ): Promise<void> {
    await this.record(event);
  }

  async recordSystem(
    event: MemberEvent,
  ): Promise<void> {
    await this.record(event);
  }
}
