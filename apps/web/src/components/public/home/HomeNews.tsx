import { NEWS } from '@/lib/constants/news';

export default function HomeNews() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-8 text-3xl font-bold">
          Latest News
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {NEWS.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border p-6"
            >
              <p className="text-sm text-gray-500">
                {item.category}
              </p>

              <h3 className="mt-2 font-semibold">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                {item.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}