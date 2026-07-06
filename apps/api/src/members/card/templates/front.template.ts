import { MemberCardData } from '../card.types';
import { DEFAULT_MEMBER_CARD_THEME } from './theme';

export function buildFrontTemplate(
  member: MemberCardData,
  qrSvg: string,
): string {
  const t = DEFAULT_MEMBER_CARD_THEME;

  return `
<svg
xmlns="http://www.w3.org/2000/svg"
width="1016"
height="640"
viewBox="0 0 1016 640">

<rect
width="1016"
height="640"
rx="${t.borderRadius}"
fill="${t.background}" />

<rect
width="1016"
height="120"
fill="${t.primary}" />

<text
x="40"
y="70"
font-size="34"
font-family="Arial"
fill="white"
font-weight="bold">
KELTA
</text>

<text
x="40"
y="108"
font-size="18"
fill="white">
Kerala Local Government Representatives Association
</text>

<rect
x="40"
y="170"
width="180"
height="220"
rx="10"
fill="#ECECEC"/>

<text
x="260"
y="215"
font-size="30"
font-weight="bold">
${member.fullName}
</text>

<text
x="260"
y="255">
Member No : ${member.memberNumber}
</text>

<text
x="260"
y="290">
Category : ${member.category}
</text>

<text
x="260"
y="325">
District : ${member.district ?? ''}
</text>

<text
x="260"
y="360">
Blood Group : ${member.bloodGroup ?? '-'}
</text>

<g transform="translate(760,340)">
${qrSvg}
</g>

</svg>
`;
}
