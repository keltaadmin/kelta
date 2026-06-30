import { Test, TestingModule } from '@nestjs/testing';
import { CommitteeMembersController } from './committee-members.controller';

describe('CommitteeMembersController', () => {
  let controller: CommitteeMembersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommitteeMembersController],
    }).compile();

    controller = module.get<CommitteeMembersController>(
      CommitteeMembersController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
