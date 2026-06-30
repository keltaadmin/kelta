import { paymentHistory } from '@/lib/constants/payments';

export default function PaymentReceiptTable() {
  return (
    <div className="rounded-lg border bg-white p-4">
      <h2 className="mb-4 font-semibold">
        Receipts
      </h2>

      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">
              Receipt
            </th>

            <th className="text-left">
              Amount
            </th>
          </tr>
        </thead>

        <tbody>
          {paymentHistory.map((item) => (
            <tr key={item.id}>
              <td>{item.receiptNumber}</td>

              <td>₹{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}