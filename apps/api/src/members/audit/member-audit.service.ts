import {
  Injectable,
  Logger,
} from '@nestjs/common';

import type { MemberEvent } from '../interfaces';

/**
 * Enterprise Member Audit Service
 *
 * Responsibilities
 * ----------------
 * - Records security-sensitive member operations
 * - Maintains an immutable audit trail
 *
 * Current implementation:
 * - Structured application logging
 *
 * Future implementation:
 * - Persist to Audit table
 * - Integration with SIEM / monitoring
 */
@Injectable()
export class MemberAuditService {
  private readonly logger =
    new Logger(MemberAuditService.name);

  /**
   * Records an audit event.
   */
  async log(
    event: MemberEvent,
  ): Promise<void> {
    this.logger.log(
      JSON.stringify({
        type: 'MEMBER_AUDIT',

        event,
      }),
    );
  }
}
