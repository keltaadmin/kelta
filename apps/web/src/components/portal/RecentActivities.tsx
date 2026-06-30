import { recentActivities } from '@/lib/constants/dashboard-data';

export default function RecentActivities() {
  return (
    <div className="rounded-lg border bg-white p-4">
      <h3 className="font-semibold mb-4">
        Recent Activities
      </h3>

      <div className="space-y-3">
        {recentActivities.map((item) => (
          <div key={item.id}>
            <p>{item.title}</p>

            <p className="text-sm text-gray-500">
              {item.timestamp}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}