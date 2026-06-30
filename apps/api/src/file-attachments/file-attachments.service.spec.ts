import { Test, TestingModule } from '@nestjs/testing';
import { FileAttachmentsService } from './file-attachments.service';

describe('FileAttachmentsService', () => {
  let service: FileAttachmentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FileAttachmentsService],
    }).compile();

    service = module.get<FileAttachmentsService>(FileAttachmentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
