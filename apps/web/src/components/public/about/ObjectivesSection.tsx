/**
 * ============================================================
 * KELTA Enterprise Platform
 * Module      : Public Website
 * Feature     : About
 * Component   : Objectives Section
 * File        : ObjectivesSection.tsx
 * Purpose     : Displays KELTA's core objectives.
 * ============================================================
 */

import { objectives } from '@/data/public/about';

import {
  Container,
  PageDescription,
  PageHeader,
  PageSection,
  PageTitle,
} from '@/components/layout';

export default function ObjectivesSection() {

  return (
    <PageSection className="bg-white">
      <Container>
        <PageHeader>
          <PageTitle>
            {objectives.title}
          </PageTitle>

          <PageDescription>
            {objectives.subtitle}
          </PageDescription>
        </PageHeader>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {objectives.items.map((objective) => (
            <article
              key={objective.id}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-lg font-bold text-sky-700">
                {objective.id.replace('OBJ-', '')}
              </div>

              <h3 className="text-xl font-semibold text-slate-900">
                {objective.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {objective.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </PageSection>
  );
}