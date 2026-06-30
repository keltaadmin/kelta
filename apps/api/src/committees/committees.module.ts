import { Module } from '@nestjs/common';
import { CommitteesController } from './committees.controller';
import { CommitteesService } from './committees.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CommitteesController],
  providers: [CommitteesService],
})
export class CommitteesModule {}
