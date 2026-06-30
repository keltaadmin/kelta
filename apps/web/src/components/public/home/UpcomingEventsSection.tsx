/**
 * ============================================================
 * KELTA Enterprise Platform
 * Public Website
 * Home - Upcoming Events
 * ============================================================
 */

import Link from 'next/link';

import { events } from '@/data/public/home';

import {
  Container,
  PageSection,
} from '@/components/layout';

import SectionHeader from '@/components/public/common/SectionHeader';
import { Button } from '@/components/ui/button';

export default function UpcomingEventsSection() {
  return (
    <PageSection className="bg-slate-50">
      <Container>

        <SectionHeader
          badge="Events"
          title="Upcoming Events"
          description="Workshops, meetings and programmes organised by KELTA."
        />

        <div className="grid gap-8 md:grid-cols-2">

          {events.map((event) => (
            <article
              key={event.id}
              className="rounded-3xl bg-white p-8 shadow-sm"
            >
              <h3 className="text-xl font-semibold">
                {event.title}
              </h3>

              <p className="mt-3 text-slate-600">
                📅 {event.date}
              </p>

              <p className="mt-2 text-slate-600">
                📍 {event.location}
              </p>

              <Button
                asChild
                variant="outline"
                className="mt-6"
              >
                <Link href={event.href}>
                  View Details
                </Link>
              </Button>

            </article>
          ))}

        </div>

      </Container>
    </PageSection>
  );
}