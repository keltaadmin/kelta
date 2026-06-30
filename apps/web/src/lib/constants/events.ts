export interface EventItem {
  id: string;
  title: string;
  date: string;
  location: string;
}

export const EVENTS: EventItem[] = [
  {
    id: 'E001',
    title: 'State Annual Conference',
    date: '2026-08-15',
    location: 'Thiruvananthapuram',
  },
  {
    id: 'E002',
    title: 'District Secretaries Meeting',
    date: '2026-07-10',
    location: 'Kochi',
  },
  {
    id: 'E003',
    title: 'Technical Training Workshop',
    date: '2026-07-20',
    location: 'Kozhikode',
  },
];