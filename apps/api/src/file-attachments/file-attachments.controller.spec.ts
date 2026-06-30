import { Test, TestingModule } from '@nestjs/testing';
import { FileAttachmentsController } from './file-attachments.controller';

describe('FileAttachmentsController', () => {
  let controller: FileAttachmentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FileAttachmentsController],
    }).compile();

    controller = module.get<FileAttachmentsController>(
      FileAttachmentsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
