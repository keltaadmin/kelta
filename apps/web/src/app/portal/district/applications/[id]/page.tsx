import ApplicationActions from '@/components/membership/ApplicationActions';
import ApplicationReviewPanel from '@/components/membership/ApplicationReviewPanel';
import ApplicationTimeline from '@/components/membership/ApplicationTimeline';

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function ApplicationDetailsPage({
  params,
}: Props) {
  const { id } = await params;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        Application {id}
      </h1>

      <ApplicationReviewPanel
        reviewer="District Secretary"
      />

      <ApplicationActions />

      <ApplicationTimeline />
    </div>
  );
}