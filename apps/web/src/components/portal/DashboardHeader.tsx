interface Props {
  title: string;
  subtitle?: string;
}

export default function DashboardHeader({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-6">
      <h1 className="text-3xl font-bold">
        {title}
      </h1>

      {subtitle && (
        <p className="text-gray-500 mt-2">
          {subtitle}
        </p>
      )}
    </div>
  );
}