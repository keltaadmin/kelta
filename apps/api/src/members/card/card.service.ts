import { Injectable, InternalServerErrorException } from '@nestjs/common';

import { CardPreviewDto } from './dto/card-preview.dto';

import { CardRendererEngine } from './renderer/engine/card-renderer.engine';

@Injectable()
export class CardService {
  constructor(private readonly renderer: CardRendererEngine) {}

  /**
   * Returns the canonical SVG representation
   * of a member card.
   *
   * This SVG becomes the single rendering source
   * for:
   *
   *  • Browser preview
   *  • PDF generation
   *  • PNG export
   */
  async preview(dto: CardPreviewDto) {
    try {
      const svg = await this.renderer.render(dto);

      return {
        success: true,
        format: 'svg',
        svg,
      };
    } catch (error) {
      throw new InternalServerErrorException({
        success: false,
        message: 'Unable to generate member card preview.',
        error:
          error instanceof Error ? error.message : 'Unknown rendering error',
      });
    }
  }
}
