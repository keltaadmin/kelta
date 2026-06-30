export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
}

export const NEWS: NewsItem[] = [
  {
    id: 'N001',
    title: 'State Committee Meeting Successfully Conducted',
    date: '2026-06-20',
    category: 'Association',
  },
  {
    id: 'N002',
    title: 'Membership Renewal Campaign Started',
    date: '2026-06-15',
    category: 'Membership',
  },
  {
    id: 'N003',
    title: 'KSMART Technical Training Program',
    date: '2026-06-10',
    category: 'Training',
  },
];