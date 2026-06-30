import DashboardHeader from '@/components/portal/DashboardHeader';

import CertificateList from '@/components/certificates/CertificateList';

export default function CertificatesPage() {
  return (
    <div className="space-y-6">
      <DashboardHeader
        title="Certificates"
        subtitle="View and manage your certificates"
      />

      <CertificateList />
    </div>
  );
}