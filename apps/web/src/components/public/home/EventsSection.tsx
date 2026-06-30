import { EVENTS } from '@/lib/constants/events';

export default function EventsSection() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-8 text-3xl font-bold">
          Upcoming Events
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {EVENTS.map((event) => (
            <div
              key={event.id}
              className="rounded-xl border bg-white p-6"
            >
              <h3 className="font-semibold">
                {event.title}
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                {event.date}
              </p>

              <p className="text-sm text-gray-500">
                {event.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}