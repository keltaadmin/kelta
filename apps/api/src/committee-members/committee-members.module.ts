import { Module } from '@nestjs/common';

import { PrismaModule } from '../prisma/prisma.module';

import { CommitteeMembersController } from './committee-members.controller';
import { CommitteeMembersService } from './committee-members.service';

@Module({
  imports: [PrismaModule],
  controllers: [CommitteeMembersController],
  providers: [CommitteeMembersService],
})
export class CommitteeMembersModule {}
