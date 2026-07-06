import { LayoutContext } from './layout.context';
import { SvgFragment } from './layout.types';

export function renderHeader(context: LayoutContext): SvgFragment {
  const {
    layout,

    theme,

    member,
  } = context;

  const header = layout.header;

  return {
    markup: `

<rect
x="${header.x}"
y="${header.y}"
width="${header.width}"
height="${header.height}"
rx="${theme.borderRadius}"
fill="${theme.primary}" />

<text
x="40"
y="48"
font-size="34"
font-family="${theme.fontFamily}"
font-weight="700"
fill="#FFFFFF">

${member.organizationName}

</text>

<text
x="40"
y="82"
font-size="18"
font-family="${theme.fontFamily}"
fill="#FFFFFF">

Official Digital Member Card

</text>

`,

    defs: [],
  };
}
