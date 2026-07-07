import { Module } from '@nestjs/common';

import { CardController } from './card.controller';
import { CardService } from './card.service';

import { CardRendererEngine } from './renderer/engine/card-renderer.engine';

@Module({
  controllers: [CardController],
  providers: [CardService, CardRendererEngine],
  exports: [CardService],
})
export class CardModule {}
