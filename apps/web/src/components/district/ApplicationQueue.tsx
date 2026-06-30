import { applicationQueue } from '@/lib/constants/district-dashboard';

export default function ApplicationQueue() {
  return (
    <div className="rounded-lg border bg-white p-6">
      <h2 className="mb-4 font-semibold">
        Pending Applications
      </h2>

      {applicationQueue.map((item) => (
        <div
          key={item.id}
          className="border-b py-3"
        >
          <div>{item.applicantName}</div>

          <div className="text-sm text-gray-500">
            {item.applicationNo}
          </div>
        </div>
      ))}
    </div>
  );
}