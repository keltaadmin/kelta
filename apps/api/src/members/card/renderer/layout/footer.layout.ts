import { LayoutContext } from './layout.context';
import { SvgFragment } from './layout.types';

export function renderFooter(context: LayoutContext): SvgFragment {
  const { layout, theme, member } = context;

  const footer = layout.footer;

  const issueDate = member.issueDate.toLocaleDateString('en-IN');

  const expiryDate = member.expiryDate
    ? member.expiryDate.toLocaleDateString('en-IN')
    : 'Lifetime';

  return {
    markup: `

<line
x1="${footer.x}"
y1="${footer.y}"
x2="${footer.x + footer.width}"
y2="${footer.y}"
stroke="${theme.border}"
stroke-width="1"/>

<text
x="${footer.x}"
y="${footer.y + 25}"
font-size="14"
font-family="${theme.fontFamily}"
fill="${theme.mutedText}">

Issue : ${issueDate}

</text>

<text
x="${footer.x + 260}"
y="${footer.y + 25}"
font-size="14"
font-family="${theme.fontFamily}"
fill="${theme.mutedText}">

Expiry : ${expiryDate}

</text>

<text
x="${footer.x + footer.width}"
y="${footer.y + 25}"
text-anchor="end"
font-size="14"
font-family="${theme.fontFamily}"
fill="${theme.mutedText}">

${theme.footerText}

</text>

`,

    defs: [],
  };
}
