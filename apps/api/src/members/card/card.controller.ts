import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';

import { CardService } from './card.service';

import { CardPreviewDto } from './dto/card-preview.dto';

@Controller('members/card')
export class CardController {
  constructor(
    private readonly cardService: CardService,
  ) {}

  /**
   * Generates SVG preview.
   *
   * This endpoint becomes the canonical rendering endpoint.
   * PDF and PNG renderers consume the exact SVG output from here.
   */
  @Post('preview')
  @HttpCode(HttpStatus.OK)
  async preview(
    @Body() dto: CardPreviewDto,
  ) {
    return this.cardService.preview(dto);
  }
}
