export default function PaymentDueCard() {
  return (
    <div className="rounded-lg border bg-white p-4">
      <h2 className="font-semibold">
        Pending Payments
      </h2>

      <p className="mt-2 text-gray-500">
        No pending payments.
      </p>
    </div>
  );
}