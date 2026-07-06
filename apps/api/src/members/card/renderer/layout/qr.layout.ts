import { LayoutContext } from './layout.context';
import { SvgFragment } from './layout.types';

export function renderQr(context: LayoutContext): SvgFragment {
  const { layout, qrSvg } = context;

  const qr = layout.qr;

  return {
    markup: `

<g
transform="translate(${qr.x},${qr.y})">

${qrSvg ?? ''}

</g>

`,

    defs: [],
  };
}
