import { NEWS } from '@/lib/constants/news';

export default function NewsTicker() {
  return (
    <div className="bg-teal-700 text-white py-2 px-6">
      <div className="max-w-7xl mx-auto">
        Latest: {NEWS[0]?.title}
      </div>
    </div>
  );
}