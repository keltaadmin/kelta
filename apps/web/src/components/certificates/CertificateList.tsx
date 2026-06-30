import CertificateCard from './CertificateCard';

import { certificates } from '@/lib/constants/certificates';

export default function CertificateList() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {certificates.map((certificate) => (
        <CertificateCard
          key={certificate.id}
          certificate={certificate}
        />
      ))}
    </div>
  );
}