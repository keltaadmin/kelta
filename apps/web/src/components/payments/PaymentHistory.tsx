import { paymentHistory } from '@/lib/constants/payments';

export default function PaymentHistory() {
  return (
    <div className="rounded-lg border bg-white p-4">
      <h2 className="mb-4 text-xl font-semibold">
        Payment History
      </h2>

      <div className="space-y-3">
        {paymentHistory.map((item) => (
          <div
            key={item.id}
            className="border-b pb-2"
          >
            <div className="font-medium">
              {item.title}
            </div>

            <div className="text-sm text-gray-500">
              ₹{item.amount}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}