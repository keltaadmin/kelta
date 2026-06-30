import DistrictStats from '@/components/district/DistrictStats';
import DistrictMembers from '@/components/district/DistrictMembers';
import ApplicationQueue from '@/components/district/ApplicationQueue';

export default function DistrictDashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        District Dashboard
      </h1>

      <DistrictStats />

      <div className="grid gap-6 lg:grid-cols-2">
        <DistrictMembers />

        <ApplicationQueue />
      </div>
    </div>
  );
}