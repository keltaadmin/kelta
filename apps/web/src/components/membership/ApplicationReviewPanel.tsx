interface Props {
  reviewer: string;
}

export default function ApplicationReviewPanel({
  reviewer,
}: Props) {
  return (
    <div className="rounded-lg border bg-white p-6">
      <h2 className="mb-4 font-semibold">
        Review Information
      </h2>

      <div>
        Reviewer: {reviewer}
      </div>

      <div className="mt-2 text-sm text-gray-500">
        District Secretary Review Panel
      </div>
    </div>
  );
}