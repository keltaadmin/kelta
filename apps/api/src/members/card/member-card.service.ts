import { Injectable } from '@nestjs/common';

/**
 * Enterprise Member Card Service
 *
 * Responsibilities
 * ----------------
 * - Build digital member card models
 * - Prepare printable card data
 * - Coordinate QR display
 * - Coordinate digital identity display
 *
 * NOTE:
 * This service does NOT create or revoke identities.
 * That responsibility belongs to DigitalIdentityService.
 */
@Injectable()
export class MemberCardService {}
