import { Injectable, Logger } from '@nestjs/common';

import type { MemberEvent } from '../interfaces';

@Injectable()
export class MemberAuditService {
  private readonly logger = new Logger(MemberAuditService.name);

  async record(event: MemberEvent): Promise<void> {
    this.logger.log(
      JSON.stringify({
        type: 'MEMBER_AUDIT',
        event,
      }),
    );
  }

  async recordBusiness(event: MemberEvent): Promise<void> {
    await this.record(event);
  }

  async recordSecurity(event: MemberEvent): Promise<void> {
    await this.record(event);
  }

  async recordSystem(event: MemberEvent): Promise<void> {
    await this.record(event);
  }
}
