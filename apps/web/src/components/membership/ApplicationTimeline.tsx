import { approvalHistory } from '@/lib/constants/approval-workflow';

export default function ApplicationTimeline() {
  return (
    <div className="rounded-lg border bg-white p-6">
      <h2 className="mb-4 font-semibold">
        Workflow Timeline
      </h2>

      <div className="space-y-4">
        {approvalHistory.map((item) => (
          <div
            key={item.id}
            className="border-l-2 pl-4"
          >
            <div className="font-medium">
              {item.action}
            </div>

            <div className="text-sm text-gray-500">
              {item.performedBy}
            </div>

            <div className="text-xs text-gray-400">
              {item.timestamp}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}