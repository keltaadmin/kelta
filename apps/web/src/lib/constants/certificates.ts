import { Certificate } from '@/types/certificate';

export const certificates: Certificate[] = [
  {
    id: '1',
    certificateNumber: 'KELTA-CERT-2026-001',

    title: 'District Training Program',

    category: 'Training',

    issueDate: '2026-01-20',

    issuedBy: 'KELTA State Committee',

    verificationCode: 'VERIFY-001',

    status: 'active',
  },

  {
    id: '2',
    certificateNumber: 'KELTA-CERT-2026-002',

    title: 'Annual Conference Participation',

    category: 'Conference',

    issueDate: '2026-03-15',

    issuedBy: 'KELTA State Committee',

    verificationCode: 'VERIFY-002',

    status: 'active',
  },
];