import { ApprovalHistory } from '@/types/approval';

export const approvalHistory: ApprovalHistory[] = [
  {
    id: '1',
    applicationId: '1',
    action: 'Submitted',
    performedBy: 'Applicant',
    timestamp: '2026-06-25 09:00',
  },
  {
    id: '2',
    applicationId: '1',
    action: 'Reviewed',
    performedBy: 'District Secretary',
    timestamp: '2026-06-25 11:00',
  },
];