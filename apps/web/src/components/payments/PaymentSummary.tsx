import { paymentSummary } from '@/lib/constants/payments';

export default function PaymentSummary() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="rounded-lg border bg-white p-4">
        <h3>Total Paid</h3>
        <p className="text-2xl font-bold">
          ₹{paymentSummary.totalPaid}
        </p>
      </div>

      <div className="rounded-lg border bg-white p-4">
        <h3>Pending</h3>
        <p className="text-2xl font-bold">
          ₹{paymentSummary.pendingAmount}
        </p>
      </div>

      <div className="rounded-lg border bg-white p-4">
        <h3>Overdue</h3>
        <p className="text-2xl font-bold">
          ₹{paymentSummary.overdueAmount}
        </p>
      </div>
    </div>
  );
}