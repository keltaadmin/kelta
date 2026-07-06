import { NotFoundException } from '@nestjs/common';

export class MemberNotFoundException extends NotFoundException {
  constructor(memberId: string) {
    super(`Member '${memberId}' was not found.`);
  }
}
