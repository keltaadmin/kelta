import { Injectable } from '@nestjs/common';

import { QRCodeService } from '../../../infrastructure/qr';

import { MemberCardData } from '../card.types';

import { buildFrontTemplate } from '../templates/front.template';

import { buildBackTemplate } from '../templates/back.template';

@Injectable()
export class SvgRenderer {
  constructor(private readonly qrService: QRCodeService) {}

  async renderFront(member: MemberCardData): Promise<string> {
    const token = member.qrCode ?? member.memberNumber;

    if (!token) {
      throw new Error('Member QR token is missing.');
    }

    const payload = this.qrService.buildPayload(
      'member',
      token,
    );

    const qrSvg = await this.qrService.generateSvg(payload);

    return buildFrontTemplate(member, qrSvg);
  }

  async renderBack(member: MemberCardData): Promise<string> {
    return buildBackTemplate(member);
  }
}
