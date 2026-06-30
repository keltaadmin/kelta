import { Test, TestingModule } from '@nestjs/testing';
import { CommitteeMembersService } from './committee-members.service';

describe('CommitteeMembersService', () => {
  let service: CommitteeMembersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommitteeMembersService],
    }).compile();

    service = module.get<CommitteeMembersService>(CommitteeMembersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
