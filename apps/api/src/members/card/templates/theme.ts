export interface MemberCardTheme {

  name: string;

  primary: string;

  secondary: string;

  accent: string;

  background: string;

  text: string;

  borderRadius: number;
}

export const DEFAULT_MEMBER_CARD_THEME: MemberCardTheme = {

  name: 'default',

  primary: '#0E4A86',

  secondary: '#00A9E0',

  accent: '#FDB813',

  background: '#FFFFFF',

  text: '#1E293B',

  borderRadius: 18,
};
