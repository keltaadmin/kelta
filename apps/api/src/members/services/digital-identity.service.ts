import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { randomUUID } from 'node:crypto';

import { PrismaService } from '../../prisma/prisma.service';

/**
 * Enterprise Digital Identity Service
 *
 * Responsibilities
 * ----------------
 * • Issue Digital Identity
 * • Lookup Digital Identity
 * • Reissue Identity
 * • Revoke Identity
 * • Identity Lifecycle
 *
 * Timeline/Audit integration
 * will be added in Part 2.
 */
@Injectable()
export class DigitalIdentityService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  /**
   * Issues a Digital Identity.
   *
   * Rules
   * -----
   * • Member must exist.
   * • Member must not already have an identity.
   * • Generates secure tokens.
   * • Creates Version 1.
   */
  async issueIdentity(
    memberId: string,
  ) {
    return this.prisma.$transaction(
      async (tx) => {
        const member =
          await tx.member.findUnique({
            where: {
              id: memberId,
            },
          });

        if (!member) {
          throw new NotFoundException(
            `Member '${memberId}' was not found.`,
          );
        }

        const existing =
          await tx.digitalIdentity.findUnique({
            where: {
              memberId,
            },
          });

        if (existing) {
          throw new ConflictException(
            'Digital identity already exists.',
          );
        }

        const issuedAt = new Date();

        const expiresAt =
          this.calculateExpiry(
            issuedAt,
          );

        return tx.digitalIdentity.create({
          data: {
            memberId,

            memberNumber:
              member.memberNumber,

            publicToken:
              this.generatePublicToken(),

            qrToken:
              this.generateQrToken(),

            cardVersion: 1,

            regeneratedCount: 0,

            issuedAt,

            expiresAt,
          },
        });
      },
    );
  }

  /**
   * Returns Digital Identity
   * for a Member.
   */
  async findByMemberId(
    memberId: string,
  ) {
    return this.prisma.digitalIdentity.findUnique({
      where: {
        memberId,
      },

      include: {
        member: true,
      },
    });
  }

  /**
   * Finds an identity
   * by Public Token.
   */
  async findByPublicToken(
    publicToken: string,
  ) {
    return this.prisma.digitalIdentity.findUnique({
      where: {
        publicToken,
      },

      include: {
        member: true,
      },
    });
  }

  /**
   * Finds an identity
   * by QR Token.
   */
  async findByQrToken(
    qrToken: string,
  ) {
    return this.prisma.digitalIdentity.findUnique({
      where: {
        qrToken,
      },

      include: {
        member: true,
      },
    });
  }

    /**
   * Reissues an existing Digital Identity.
   *
   * Rules
   * -----
   * • Identity must already exist.
   * • Generates new secure tokens.
   * • Increments card version.
   * • Increments regeneration count.
   * • Clears revocation state.
   * • Resets issued/expiry dates.
   */
  async reissueIdentity(
    memberId: string,
  ) {
    return this.prisma.$transaction(
      async (tx) => {
        const identity =
          await tx.digitalIdentity.findUnique({
            where: {
              memberId,
            },
          });

        if (!identity) {
          throw new NotFoundException(
            `Digital identity for member '${memberId}' was not found.`,
          );
        }

        const issuedAt = new Date();

        const expiresAt =
          this.calculateExpiry(
            issuedAt,
          );

        const updated =
          await tx.digitalIdentity.update({
            where: {
              memberId,
            },

            data: {
              publicToken:
                this.generatePublicToken(),

              qrToken:
                this.generateQrToken(),

              cardVersion: {
                increment: 1,
              },

              regeneratedCount: {
                increment: 1,
              },

              issuedAt,

              expiresAt,

              revokedAt: null,
            },

            include: {
              member: true,
            },
          });

        /**
         * Timeline / Audit
         * ----------------
         * Will be integrated
         * in Sprint 3D.
         */

        return updated;
      },
    );
  }

  /**
   * Revokes a Digital Identity.
   *
   * Rules
   * -----
   * • Identity must exist.
   * • Physical deletion is never performed.
   * • Revocation timestamp is recorded.
   */
  async revokeIdentity(
    memberId: string,
  ) {
    return this.prisma.$transaction(
      async (tx) => {
        const identity =
          await tx.digitalIdentity.findUnique({
            where: {
              memberId,
            },
          });

        if (!identity) {
          throw new NotFoundException(
            `Digital identity for member '${memberId}' was not found.`,
          );
        }

        const updated =
          await tx.digitalIdentity.update({
            where: {
              memberId,
            },

            data: {
              revokedAt: new Date(),
            },

            include: {
              member: true,
            },
          });

        /**
         * Timeline / Audit
         * ----------------
         * Sprint 3D
         */

        return updated;
      },
    );
  }

  /**
   * Returns whether
   * an identity has expired.
   */
  isExpired(
    expiresAt: Date | null,
  ): boolean {
    if (!expiresAt) {
      return false;
    }

    return expiresAt.getTime() < Date.now();
  }

  /**
   * Returns whether
   * an identity has been revoked.
   */
  isRevoked(
    revokedAt: Date | null,
  ): boolean {
    return revokedAt !== null;
  }

    /**
   * Generates a public verification token.
   */
  private generatePublicToken(): string {
    return randomUUID().replace(/-/g, '');
  }

  /**
   * Generates a QR token.
   */
  private generateQrToken(): string {
    return randomUUID().replace(/-/g, '');
  }

  /**
   * Calculates the default expiry date.
   *
   * Current policy:
   * Valid for one year from the issue date.
   */
  private calculateExpiry(
    issuedAt: Date,
  ): Date {
    const expiry = new Date(issuedAt);

    expiry.setFullYear(
      expiry.getFullYear() + 1,
    );

    return expiry;
  }
}

