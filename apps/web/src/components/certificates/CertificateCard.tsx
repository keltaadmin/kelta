import { Certificate } from '@/types/certificate';

interface Props {
  certificate: Certificate;
}

export default function CertificateCard({
  certificate,
}: Props) {
  return (
    <div className="rounded-lg border bg-white p-4">
      <h3 className="font-semibold">
        {certificate.title}
      </h3>

      <p className="mt-2 text-sm text-gray-500">
        {certificate.category}
      </p>

      <p className="mt-1 text-sm">
        Certificate No:
        {' '}
        {certificate.certificateNumber}
      </p>

      <p className="text-sm">
        Issued:
        {' '}
        {certificate.issueDate}
      </p>

      <p className="text-sm">
        By:
        {' '}
        {certificate.issuedBy}
      </p>
    </div>
  );
}