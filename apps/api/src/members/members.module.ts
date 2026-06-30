import { Module } from '@nestjs/common';

import { MembersController } from './members.controller';
import { MembersService } from './members.service';

import { PrismaModule } from '../prisma/prisma.module';
import { NumberingModule } from '../numbering/numbering.module';

@Module({
  imports: [PrismaModule, NumberingModule],
  controllers: [MembersController],
  providers: [MembersService],
  exports: [MembersService],
})
export class MembersModule {}
