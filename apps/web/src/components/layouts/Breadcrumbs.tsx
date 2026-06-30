interface Props {
  items?: string[];
}

export default function Breadcrumbs({
  items = [],
}: Props) {
  return (
    <div className="text-sm text-gray-500">
      {items.join(' / ')}
    </div>
  );
}