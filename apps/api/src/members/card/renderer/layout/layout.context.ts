import { MemberCardData } from '../../interfaces/member-card-data.interface';
import { CardLayout } from './layout.constants';
import { MemberCardTheme } from '../theme/theme.interface';

export interface LayoutContext {
  member: MemberCardData;

  layout: CardLayout;

  theme: MemberCardTheme;

  qrSvg?: string;

  preview?: boolean;
}
