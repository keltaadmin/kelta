import { Test, TestingModule } from '@nestjs/testing';

import { MembersController } from './members.controller';
import { MembersService } from './members.service';

/**
 * ============================================================================
 * Members Controller Unit Tests
 * ============================================================================
 *
 * Purpose
 * -------
 * Verifies that the MembersController is correctly instantiated and
 * wired with its dependencies.
 *
 * Notes
 * -----
 * • Business logic is tested in MembersService.
 * • Controller tests focus on routing and delegation.
 * • Mock services are used to isolate the controller.
 * ============================================================================
 */

describe('MembersController', () => {
  let controller: MembersController;

  const membersServiceMock = {
    findAll: jest.fn(),
    findOne: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),

    activateMember: jest.fn(),
    suspendMember: jest.fn(),
    restoreMember: jest.fn(),
    renewMember: jest.fn(),
    retireMember: jest.fn(),
  };

  beforeEach(async () => {
    jest.clearAllMocks();

    const module: TestingModule =
      await Test.createTestingModule({
        controllers: [MembersController],

        providers: [
          {
            provide: MembersService,
            useValue: membersServiceMock,
          },
        ],
      }).compile();

    controller =
      module.get<MembersController>(
        MembersController,
      );
  });

  describe('Initialization', () => {
    it('should be defined', () => {
      expect(controller).toBeDefined();
    });
  });
});
