import {
  PaymentRecord,
  PaymentSummaryData,
} from '@/types/payment';

export const paymentSummary: PaymentSummaryData = {
  totalPaid: 5000,
  pendingAmount: 0,
  overdueAmount: 0,
};

export const paymentHistory: PaymentRecord[] = [
  {
    id: '1',
    title: 'Membership Renewal 2026',
    amount: 2000,
    paymentDate: '2026-01-15',
    status: 'paid',
    receiptNumber: 'KELTA-R-00001',
  },

  {
    id: '2',
    title: 'Conference Registration',
    amount: 3000,
    paymentDate: '2026-03-10',
    status: 'paid',
    receiptNumber: 'KELTA-R-00002',
  },
];