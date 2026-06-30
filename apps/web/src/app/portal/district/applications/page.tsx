import ApplicationTable from '@/components/membership/ApplicationTable';

export default function DistrictApplicationsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        Membership Applications
      </h1>

      <ApplicationTable />
    </div>
  );
}