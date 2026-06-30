export interface Leader {
  id: string;
  name: string;
  designation: string;
}

export const LEADERSHIP: Leader[] = [
  {
    id: 'L001',
    name: 'State President',
    designation: 'President',
  },
  {
    id: 'L002',
    name: 'General Secretary',
    designation: 'General Secretary',
  },
  {
    id: 'L003',
    name: 'State Treasurer',
    designation: 'Treasurer',
  },
];