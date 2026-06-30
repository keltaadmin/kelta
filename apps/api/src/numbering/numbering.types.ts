import { Prisma, SequenceType } from '@prisma/client';

export interface GenerateNumberOptions {
  type: SequenceType;

  scope?: string;

  districtCode?: string;

  year?: number;

  transaction?: Prisma.TransactionClient;
}

export interface NumberFormatConfig {
  format: string;
}
