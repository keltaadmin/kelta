import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';

import { CommitteePositionsController } from './committee-positions.controller';
import { CommitteePositionsService } from './committee-positions.service';

@Module({
  imports: [PrismaModule],
  controllers: [CommitteePositionsController],
  providers: [CommitteePositionsService],
})
export class CommitteePositionsModule {}
