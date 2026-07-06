import { BadRequestException } from '@nestjs/common';

export class MemberAlreadyActiveException extends BadRequestException {
  constructor(memberNumber?: string) {
    super(
      memberNumber
        ? `Member '${memberNumber}' is already active.`
        : 'Member is already active.',
    );
  }
}
