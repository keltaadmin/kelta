import DashboardHeader from '@/components/portal/DashboardHeader';

import PaymentSummary from '@/components/payments/PaymentSummary';
import PaymentHistory from '@/components/payments/PaymentHistory';
import PaymentDueCard from '@/components/payments/PaymentDueCard';
import PaymentReceiptTable from '@/components/payments/PaymentReceiptTable';

export default function PaymentsPage() {
  return (
    <div className="space-y-6">
      <DashboardHeader
        title="Payments"
        subtitle="Manage payment history and dues"
      />

      <PaymentSummary />

      <PaymentHistory />

      <PaymentDueCard />

      <PaymentReceiptTable />
    </div>
  );
}