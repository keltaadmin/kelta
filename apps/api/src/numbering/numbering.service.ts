import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

import { GenerateNumberOptions, NumberFormatConfig } from './numbering.types';

import { NUMBER_SETTING_KEYS } from './numbering.constants';

import { SequenceType, Prisma } from '@prisma/client';

@Injectable()
export class NumberingService {
  constructor(private readonly prisma: PrismaService) {}

  private async generateNumber(
    options: GenerateNumberOptions,
  ): Promise<string> {
    const year = options.year ?? new Date().getFullYear();

    const db = options.transaction ?? this.prisma;

    const setting = await db.systemSetting.findUnique({
      where: {
        key: NUMBER_SETTING_KEYS[options.type],
      },
    });

    if (!setting) {
      throw new NotFoundException(
        `Number format not configured for ${options.type}`,
      );
    }

    const config = setting.value as unknown as NumberFormatConfig;

    if (typeof config.format !== 'string') {
      throw new NotFoundException(
        `Invalid number format configuration for ${options.type}`,
      );
    }

    const format = config.format;

    const sequence = await db.runningSequence.upsert({
      where: {
        type_scope: {
          type: options.type,
          scope: options.scope ?? '',
        },
      },

      create: {
        type: options.type,
        scope: options.scope ?? '',
        currentNo: 1,
      },

      update: {
        currentNo: {
          increment: 1,
        },
      },
    });

    let result = format;

    const replacements = {
      '{YYYY}': year.toString(),
      '{YY}': year.toString().slice(-2),
      '{MONTH}': String(new Date().getMonth() + 1).padStart(2, '0'),
      '{DISTRICT}': options.districtCode ?? '',
    };

    for (const [token, value] of Object.entries(replacements)) {
      result = result.replaceAll(token, value);
    }

    result = result.replace(/\{SEQ:(\d+)\}/, (_, digits) =>
      sequence.currentNo.toString().padStart(Number(digits), '0'),
    );

    return result;
  }

  async generateMemberNumber(tx: Prisma.TransactionClient): Promise<string> {
    return this.generateNumber({
      type: SequenceType.MEMBER,
      scope: 'GLOBAL',
      transaction: tx,
    });
  }

  async generateApplicationNumber(
    tx: Prisma.TransactionClient,
    districtCode: string,
  ): Promise<string> {
    return this.generateNumber({
      type: SequenceType.MEMBERSHIP_APPLICATION,

      districtCode,

      scope: districtCode,

      transaction: tx,
    });
  }

  async generateReceiptNumber(tx: Prisma.TransactionClient): Promise<string> {
    return this.generateNumber({
      type: SequenceType.RECEIPT,

      scope: 'GLOBAL',

      transaction: tx,
    });
  }

  async generateMeetingNumber(tx: Prisma.TransactionClient): Promise<string> {
    return this.generateNumber({
      type: SequenceType.MEETING,

      scope: 'GLOBAL',

      transaction: tx,
    });
  }

  async generateCertificateNumber(
    tx: Prisma.TransactionClient,
  ): Promise<string> {
    return this.generateNumber({
      type: SequenceType.CERTIFICATE,

      scope: 'GLOBAL',

      transaction: tx,
    });
  }

  async generateCircularNumber(tx: Prisma.TransactionClient): Promise<string> {
    return this.generateNumber({
      type: SequenceType.CIRCULAR,

      scope: 'GLOBAL',

      transaction: tx,
    });
  }

  async generatePaymentNumber(tx: Prisma.TransactionClient): Promise<string> {
    return this.generateNumber({
      type: SequenceType.PAYMENT,

      scope: 'GLOBAL',

      transaction: tx,
    });
  }

  async generateByType(
    type: SequenceType,
    tx: Prisma.TransactionClient,
    scope = 'GLOBAL',
    districtCode?: string,
  ): Promise<string> {
    return this.generateNumber({
      type,
      scope,
      districtCode,
      transaction: tx,
    });
  }
}
