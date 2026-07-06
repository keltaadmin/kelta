import type { QRResourceType } from './qr.types';

/**
 * Payload stored inside QR Codes.
 *
 * Versioned to allow future upgrades.
 */
export interface QRPayload {

  readonly v: number;

  readonly issuer: string;

  readonly type: QRResourceType;

  readonly token: string;
}

/**
 * Generated QR response.
 */
export interface QRResult {

  readonly payload: QRPayload;

  readonly data: string;
}
