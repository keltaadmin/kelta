import { SvgFragment } from '../layout/layout.types';
import { CARD_LAYOUT } from '../layout/layout.constants';

export interface MemberCardTemplate {
  fragments: SvgFragment[];
}

export function buildMemberCard(template: MemberCardTemplate): string {
  const defs = template.fragments
    .flatMap((fragment) => fragment.defs ?? [])
    .join('\n');

  const body = template.fragments.map((fragment) => fragment.markup).join('\n');

  return `

<svg
xmlns="http://www.w3.org/2000/svg"
width="${CARD_LAYOUT.width}"
height="${CARD_LAYOUT.height}"
viewBox="0 0 ${CARD_LAYOUT.width} ${CARD_LAYOUT.height}">

<defs>

${defs}

</defs>

${body}

</svg>

`;
}
