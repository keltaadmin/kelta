import { Module } from '@nestjs/common';
import { FileAttachmentsController } from './file-attachments.controller';
import { FileAttachmentsService } from './file-attachments.service';

@Module({
  controllers: [FileAttachmentsController],
  providers: [FileAttachmentsService],
})
export class FileAttachmentsModule {}
