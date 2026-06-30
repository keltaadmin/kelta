import DashboardHeader from '@/components/portal/DashboardHeader';
import DashboardStats from '@/components/portal/DashboardStats';
import MemberSummary from '@/components/portal/MemberSummary';
import QuickActions from '@/components/portal/QuickActions';
import RecentActivities from '@/components/portal/RecentActivities';
import WorkspaceHeader from '@/components/portal/WorkspaceHeader';

import { memberStats } from '@/lib/constants/dashboard-data';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <DashboardHeader
        title="Member Dashboard"
        subtitle="Welcome to KELTA Portal"
      />
      <WorkspaceHeader />
      <DashboardStats stats={memberStats} />

      <div className="grid gap-6 lg:grid-cols-2">
        <MemberSummary />

        <QuickActions />
      </div>

      <RecentActivities />
    </div>
  );
}