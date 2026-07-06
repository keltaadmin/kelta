/**
 * ============================================================================
 * KELTA Member Card Layout
 * ============================================================================
 */

export interface LayoutBlock {

  x: number;

  y: number;

  width: number;

  height: number;
}

export interface CardLayout {

  width: number;

  height: number;

  header: LayoutBlock;

  photo: LayoutBlock;

  info: LayoutBlock;

  qr: LayoutBlock;

  footer: LayoutBlock;
}

export const CARD_LAYOUT: CardLayout = {

  width: 1016,

  height: 640,

  header: {

    x: 0,

    y: 0,

    width: 1016,

    height: 110,

  },

  photo: {

    x: 40,

    y: 150,

    width: 180,

    height: 220,

  },

  info: {

    x: 260,

    y: 145,

    width: 520,

    height: 240,

  },

  qr: {

    x: 810,

    y: 340,

    width: 170,

    height: 170,

  },

  footer: {

    x: 40,

    y: 580,

    width: 936,

    height: 40,

  },

};
