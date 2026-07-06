import { LayoutContext } from './layout.context';
import { SvgFragment } from './layout.types';

export function renderPhoto(
  context: LayoutContext,
): SvgFragment {
  const { layout, member } = context;

  const photo = layout.photo;

  if (!member.photoUrl) {
    return {
      markup: `
<rect
  x="${photo.x}"
  y="${photo.y}"
  width="${photo.width}"
  height="${photo.height}"
  rx="16"
  fill="#ECECEC"/>

<text
  x="${photo.x + photo.width / 2}"
  y="${photo.y + photo.height / 2}"
  text-anchor="middle"
  dominant-baseline="middle"
  font-size="15"
  fill="#999999">

PHOTO

</text>
`,
      defs: [],
    };
  }

  const clipId = `member-photo-${member.id}`;

  return {
    markup: `
<image
  href="${member.photoUrl}"
  x="${photo.x}"
  y="${photo.y}"
  width="${photo.width}"
  height="${photo.height}"
  preserveAspectRatio="xMidYMid slice"
  clip-path="url(#${clipId})"
/>
`,
    defs: [
      `
<clipPath id="${clipId}">
  <rect
    x="${photo.x}"
    y="${photo.y}"
    width="${photo.width}"
    height="${photo.height}"
    rx="16"/>
</clipPath>
`,
    ],
  };
}
