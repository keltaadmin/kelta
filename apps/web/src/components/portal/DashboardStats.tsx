import { StatCard } from '@/types/dashboard';

interface Props {
  stats: StatCard[];
}

export default function DashboardStats({
  stats,
}: Props) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="rounded-lg border p-4 bg-white"
        >
          <div className="text-sm text-gray-500">
            {stat.title}
          </div>

          <div className="mt-2 text-2xl font-bold">
            {stat.value}
          </div>

          {stat.description && (
            <div className="mt-2 text-sm text-gray-500">
              {stat.description}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}