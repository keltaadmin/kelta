import { MemberCardData } from '../card.types';

export function buildBackTemplate(
  member: MemberCardData,
): string {

  return `
<svg
xmlns="http://www.w3.org/2000/svg"
width="1016"
height="640">

<rect
width="1016"
height="640"
fill="#ffffff"/>

<text
x="40"
y="70"
font-size="30"
font-weight="bold">
Member Information
</text>

<text
x="40"
y="130">
Issued :
${member.issuedAt.toDateString()}
</text>

<text
x="40"
y="180">
Valid Until :
${member.validUntil?.toDateString() ?? 'Lifetime'}
</text>

<text
x="40"
y="280">
If found please return to
KELTA State Office.
</text>

<line
x1="700"
y1="520"
x2="930"
y2="520"
stroke="black"/>

<text
x="740"
y="550">
Authorized Signatory
</text>

</svg>
`;
}
