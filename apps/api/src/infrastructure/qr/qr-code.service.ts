import { Injectable } from '@nestjs/common';

import * as QRCode from 'qrcode';

import { QR_DEFAULTS, QR_ISSUER, QR_PAYLOAD_VERSION } from './qr.constants';

import type { QRPayload, QRResult } from './qr.interfaces';

import type { QRResourceType } from './qr.types';

/**
 * ============================================================
 * KELTA Enterprise Platform
 * Platform QR Infrastructure
 * ============================================================
 *
 * Responsibilities
 * ----------------
 * • Build versioned QR payloads
 * • Generate SVG
 * • Generate PNG Data URL
 * • Generate Base64
 * • Generate Buffer
 * • Generate Verification URLs
 *
 * This service contains NO business logic.
 */
@Injectable()
export class QRCodeService {
  /**
   * Builds a versioned QR payload.
   */
  buildPayload(type: QRResourceType, token: string): QRPayload {
    return {
      v: QR_PAYLOAD_VERSION,

      issuer: QR_ISSUER,

      type,

      token,
    };
  }

  /**
   * Converts payload into JSON.
   */
  serializePayload(payload: QRPayload): string {
    return JSON.stringify(payload);
  }

  /**
   * Builds verification URL.
   *
   * Example
   * https://kelta.org/verify/member/xxxxx
   */
  buildVerificationUrl(
    baseUrl: string,
    type: QRResourceType,
    token: string,
  ): string {
    return `${baseUrl}/verify/${type}/${token}`;
  }

  /**
   * Generates SVG.
   */
  async generateSvg(payload: QRPayload): Promise<string> {
    return QRCode.toString(
      this.serializePayload(payload),

      {
        type: 'svg',

        width: QR_DEFAULTS.WIDTH,

        margin: QR_DEFAULTS.MARGIN,

        errorCorrectionLevel: QR_DEFAULTS.ERROR_CORRECTION_LEVEL,
      },
    );
  }

  /**
   * Generates PNG Data URL.
   */
  async generateDataUrl(payload: QRPayload): Promise<string> {
    return QRCode.toDataURL(
      this.serializePayload(payload),

      {
        width: QR_DEFAULTS.WIDTH,

        margin: QR_DEFAULTS.MARGIN,

        errorCorrectionLevel: QR_DEFAULTS.ERROR_CORRECTION_LEVEL,
      },
    );
  }

  /**
   * Generates PNG Buffer.
   */
  async generateBuffer(payload: QRPayload): Promise<Buffer> {
    return QRCode.toBuffer(
      this.serializePayload(payload),

      {
        width: QR_DEFAULTS.WIDTH,

        margin: QR_DEFAULTS.MARGIN,

        errorCorrectionLevel: QR_DEFAULTS.ERROR_CORRECTION_LEVEL,
      },
    );
  }

  /**
   * Generates Base64 PNG.
   */
  async generateBase64(payload: QRPayload): Promise<string> {
    const dataUrl = await this.generateDataUrl(payload);

    return dataUrl.replace(/^data:image\/png;base64,/, '');
  }

  /**
   * Convenience helper.
   *
   * Builds payload and returns Data URL.
   */
  async generate(type: QRResourceType, token: string): Promise<QRResult> {
    const payload = this.buildPayload(type, token);

    return {
      payload,

      data: await this.generateDataUrl(payload),
    };
  }
}
