export interface Certificate {
  id: string;

  certificateNumber: string;

  title: string;

  category: string;

  issueDate: string;

  issuedBy: string;

  verificationCode: string;

  status: 'active' | 'revoked';

  fileUrl?: string;
}