import { Injectable } from '@nestjs/common';

import { QRCodeService } from '../../infrastructure/qr';

import { MemberCardData } from '../card.types';

import { buildFrontTemplate } from '../templates/front.template';

import { buildBackTemplate } from '../templates/back.template';

@Injectable()
export class SvgRenderer {

  constructor(
    private readonly qrService: QRCodeService,
  ) {}

  async renderFront(
    member: MemberCardData,
  ): Promise<string> {

    const qrSvg = await this.qrService.generateSvg(
      member.qrCodeUrl,
    );

    return buildFrontTemplate(
      member,
      qrSvg,
    );
  }

  async renderBack(
    member: MemberCardData,
  ): Promise<string> {

    return buildBackTemplate(
      member,
    );
  }
}
