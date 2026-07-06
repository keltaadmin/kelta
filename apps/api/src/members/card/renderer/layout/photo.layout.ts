import { LayoutContext } from './layout.context';
import { SvgFragment } from './layout.types';

export function renderPhoto(
  context: LayoutContext,
): SvgFragment {

  const {

    layout,

    member,

  } = context;

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
x="${photo.x + 55}"
y="${photo.y + 118}"
font-size="15"
fill="#999999">

PHOTO

</text>

`,

      defs: [],

    };

  }

  return {

    markup: `

<image
href="${member.photoUrl}"
x="${photo.x}"
y="${photo.y}"
width="${photo.width}"
height="${photo.height}"
preserveAspectRatio="xMidYMid slice"
/>

`,

    defs: [

      `
const clipId = `member-photo-${member.id}`;

<rect
x="${photo.x}"
y="${photo.y}"
width="${photo.width}"
height="${photo.height}"
rx="16"/>

</clipPath>import { LayoutContext } from './layout.context';
import { SvgFragment } from './layout.types';

export function renderPhoto(
  context: LayoutContext,
): SvgFragment {

  const {

    layout,

    member,

  } = context;

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
x="${photo.x + 55}"
y="${photo.y + 118}"
font-size="15"
fill="#999999">

PHOTO

</text>

`,

      defs: [],

    };

  }

  return {

    markup: `

<image
href="${member.photoUrl}"
x="${photo.x}"
y="${photo.y}"
width="${photo.width}"
height="${photo.height}"
preserveAspectRatio="xMidYMid slice"
/>

`,

    defs: [

      `
<clipPath id="member-photo">

<rect
x="${photo.x}"
y="${photo.y}"
width="${photo.width}"
height="${photo.height}"
rx="16"/>

</clipPath>
`

    ],

  };

}
`

    ],

  };

}
