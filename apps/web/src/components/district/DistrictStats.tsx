import { districtStats } from '@/lib/constants/district-dashboard';

export default function DistrictStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {districtStats.map((item) => (
        <div
          key={item.title}
          className="rounded-lg border bg-white p-4"
        >
          <div className="text-sm text-gray-500">
            {item.title}
          </div>

          <div className="mt-2 text-3xl font-bold">
            {item.value}
          </div>
        </div>
      ))}
    </div>
  );
}