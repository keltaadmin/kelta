export type PaymentStatus =
  | 'paid'
  | 'pending'
  | 'overdue';

export interface PaymentRecord {
  id: string;

  title: string;

  amount: number;

  paymentDate?: string;

  dueDate?: string;

  status: PaymentStatus;

  receiptNumber?: string;
}

export interface PaymentSummaryData {
  totalPaid: number;
  pendingAmount: number;
  overdueAmount: number;
}