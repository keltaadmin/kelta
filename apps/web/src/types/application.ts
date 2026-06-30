export type ApplicationStatus =
  | 'Draft'
  | 'Submitted'
  | 'Under Review'
  | 'Approved'
  | 'Rejected';

export interface MembershipApplication {
  id: string;
  applicationNumber: string;
  applicantName: string;
  districtCode: string;
  submittedDate: string;
  status: ApplicationStatus;
}

export interface ApplicationReview {
  applicationId: string;
  reviewedBy: string;
  reviewedDate: string;
  remarks?: string;
}