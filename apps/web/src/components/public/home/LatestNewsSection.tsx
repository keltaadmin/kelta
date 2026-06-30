/**
 * ============================================================
 * KELTA Enterprise Platform
 * Public Website
 * Home - Latest News Section
 * ============================================================
 */

import Link from 'next/link';

import { newsPreview } from '@/data/public/home';

import {
  Container,
  PageSection,
} from '@/components/layout';

import SectionHeader from '@/components/public/common/SectionHeader';
import { Button } from '@/components/ui/button';

export default function LatestNewsSection() {
  return (
    <PageSection className="bg-white">
      <Container>

        <SectionHeader
          badge="News"
          title="Latest News & Announcements"
          description="Stay updated with the latest activities, circulars and announcements from KELTA."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {newsPreview.map((news) => (
            <article
              key={news.id}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-sm font-medium text-sky-700">
                {news.date}
              </p>

              <h3 className="mt-4 text-xl font-semibold">
                {news.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {news.summary}
              </p>

              <Button
                asChild
                variant="link"
                className="mt-6 px-0"
              >
                <Link href={news.href}>
                  Read More →
                </Link>
              </Button>
            </article>
          ))}
        </div>

      </Container>
    </PageSection>
  );
}