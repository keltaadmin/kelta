import { ApplicationStatus } from '@/types/application';

interface Props {
  status: ApplicationStatus;
}

export default function ApplicationStatusBadge({
  status,
}: Props) {
  return (
    <span className="rounded-full border px-3 py-1 text-xs font-medium">
      {status}
    </span>
  );
}