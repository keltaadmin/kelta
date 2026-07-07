import { Injectable, Logger } from '@nestjs/common';

import type { MemberEvent } from '../interfaces';

@Injectable()
export class MemberAuditService {
  private readonly logger = new Logger(MemberAuditService.name);

  record(event: MemberEvent): void {
    this.logger.log(
      JSON.stringify({
        type: 'MEMBER_AUDIT',
        event,
      }),
    );
  }

  recordBusiness(event: MemberEvent): void {
    this.record(event);
  }

  recordSecurity(event: MemberEvent): void {
    this.record(event);
  }

  recordSystem(event: MemberEvent): void {
    this.record(event);
  }
}
