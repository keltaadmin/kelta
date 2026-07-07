import { Injectable } from '@nestjs/common';

import { CardPreviewDto } from '../../dto/card-preview.dto';

@Injectable()
export class CardRendererEngine {
  /**
   * Temporary renderer.
   *
   * Batch 4 replaces this implementation with the
   * complete SVG rendering pipeline.
   */
  render(dto: CardPreviewDto): string {
    return `
<svg xmlns="http://www.w3.org/2000/svg"
     width="1011"
     height="638"
     viewBox="0 0 1011 638">

    <rect
        width="1011"
        height="638"
        fill="#F5F5F5"/>

    <text
        x="505"
        y="319"
        text-anchor="middle"
        font-size="28"
        fill="#444">

        KELTA Member Card Preview

    </text>

    <text
        x="505"
        y="360"
        text-anchor="middle"
        font-size="18"
        fill="#666">

        ${dto.memberId}

    </text>

</svg>
`;
  }
}
