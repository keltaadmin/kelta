import { BadRequestException } from '@nestjs/common';

import { MemberStatus } from '@prisma/client';

export class InvalidMemberTransitionException extends BadRequestException {
  constructor(from: MemberStatus, to: MemberStatus) {
    super(`Invalid member status transition from '${from}' to '${to}'.`);
  }
}
