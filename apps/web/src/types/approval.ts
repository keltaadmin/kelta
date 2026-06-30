export type ApprovalAction =
  | 'Submitted'
  | 'Reviewed'
  | 'Approved'
  | 'Rejected';

export interface ApprovalHistory {
  id: string;
  applicationId: string;
  action: ApprovalAction;
  performedBy: string;
  remarks?: string;
  timestamp: string;
}