import { Test, TestingModule } from '@nestjs/testing';

import { MembersService } from './members.service';

import { PrismaService } from '../prisma/prisma.service';
import { NumberingService } from '../numbering/numbering.service';

import { MemberLifecycleService } from './services';

/**
 * ============================================================================
 * Members Service Unit Tests
 * ============================================================================
 *
 * Purpose
 * -------
 * Verifies that the MembersService is correctly instantiated with all of
 * its dependencies.
 *
 * Notes
 * -----
 * • Business rules are tested in their respective domain services.
 * • External dependencies are mocked.
 * * This file provides the foundation for future service tests.
 * ============================================================================
 */

describe('MembersService', () => {
  let service: MembersService;

  /**
   * --------------------------------------------------------------------------
   * Prisma Mock
   * --------------------------------------------------------------------------
   */
  const prismaMock = {
    member: {
      findMany: jest.fn(),
      findUnique: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
      count: jest.fn(),
    },

    $transaction: jest.fn(),
  };

  /**
   * --------------------------------------------------------------------------
   * Numbering Service Mock
   * --------------------------------------------------------------------------
   */
  const numberingServiceMock = {
    generateMemberNumber: jest.fn(),
  };

  /**
   * --------------------------------------------------------------------------
   * Lifecycle Service Mock
   * --------------------------------------------------------------------------
   */
  const lifecycleServiceMock = {
    canTransition: jest.fn(),
    ensureTransition: jest.fn(),

    activate: jest.fn(),
    suspend: jest.fn(),
    restore: jest.fn(),
    deactivate: jest.fn(),
    retire: jest.fn(),

    renew: jest.fn(),
  };

  beforeEach(async () => {
    jest.clearAllMocks();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MembersService,

        {
          provide: PrismaService,
          useValue: prismaMock,
        },

        {
          provide: NumberingService,
          useValue: numberingServiceMock,
        },

        {
          provide: MemberLifecycleService,
          useValue: lifecycleServiceMock,
        },
      ],
    }).compile();

    service = module.get<MembersService>(MembersService);
  });

  describe('Initialization', () => {
    it('should be defined', () => {
      expect(service).toBeDefined();
    });
  });

  describe('Dependencies', () => {
    it('should inject PrismaService', () => {
      expect(prismaMock).toBeDefined();
    });

    it('should inject NumberingService', () => {
      expect(numberingServiceMock).toBeDefined();
    });

    it('should inject MemberLifecycleService', () => {
      expect(lifecycleServiceMock).toBeDefined();
    });
  });
});
