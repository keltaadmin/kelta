import { SequenceType } from '@prisma/client';

export const NUMBER_SETTING_KEYS: Record<SequenceType, string> = {
  MEMBER: 'member.number.format',
  MEMBERSHIP_APPLICATION: 'application.number.format',
  RECEIPT: 'receipt.number.format',
  MEETING: 'meeting.number.format',
  CIRCULAR: 'circular.number.format',
  CERTIFICATE: 'certificate.number.format',
  PAYMENT: 'payment.number.format',
};
