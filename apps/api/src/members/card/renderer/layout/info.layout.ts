import { LayoutContext } from './layout.context';
import { SvgFragment } from './layout.types';

export function renderInfo(
  context: LayoutContext,
): SvgFragment {

  const {

    layout,

    member,

    theme,

  } = context;

  const info = layout.info;

  return {

    markup: `

<text
x="${info.x}"
y="${info.y + 20}"
font-size="32"
font-family="${theme.fontFamily}"
font-weight="700"
fill="${theme.text}">

${member.fullName}

</text>

<text
x="${info.x}"
y="${info.y + 58}"
font-size="18"
fill="${theme.mutedText}">

Member No

</text>

<text
x="${info.x + 130}"
y="${info.y + 58}"
font-size="18"
fill="${theme.text}">

${member.memberNumber}

</text>

<text
x="${info.x}"
y="${info.y + 96}"
font-size="18"
fill="${theme.mutedText}">

Membership

</text>

<text
x="${info.x + 130}"
y="${info.y + 96}"
font-size="18"
fill="${theme.text}">

${member.membershipType}

</text>

<text
x="${info.x}"
y="${info.y + 134}"
font-size="18"
fill="${theme.mutedText}">

Designation

</text>

<text
x="${info.x + 130}"
y="${info.y + 134}"
font-size="18"
fill="${theme.text}">

${member.designation ?? "-"}

</text>

<text
x="${info.x}"
y="${info.y + 172}"
font-size="18"
fill="${theme.mutedText}">

District

</text>

<text
x="${info.x + 130}"
y="${info.y + 172}"
font-size="18"
fill="${theme.text}">

${member.district ?? "-"}

</text>

`,

    defs: [],

  };

}
