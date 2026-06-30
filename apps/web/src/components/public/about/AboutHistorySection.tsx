/**
 * ============================================================
 * KELTA Enterprise Platform
 * Module      : Public Website
 * Feature     : About
 * Component   : About History Section
 * File        : AboutHistorySection.tsx
 * Purpose     : Displays the introduction and history of KELTA.
 * ============================================================
 */

import { history } from '@/data/public/about';

import {
  Container,
  PageDescription,
  PageSection,
  PageTitle,
} from '@/components/layout';

export default function AboutHistorySection() {
const foundedYear = 2012;

  const organisationName =
    'Kerala Local Body Technical Assistants Association (KELTA)';

  const years = new Date().getFullYear() - foundedYear;

  return (
    <PageSection className="bg-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Content */}
          <div>
            <span className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
              Since {foundedYear}
            </span>

            <PageTitle className="mt-6">
              {history.title}
            </PageTitle>

            <PageDescription>
              {history.description}
            </PageDescription>
          </div>

          {/* Right Cards */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <p className="text-5xl font-bold text-sky-700">
                {years}+
              </p>

              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                Years of Service
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Dedicated to strengthening Local Self Government
                Institutions through professional excellence.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <p className="text-5xl font-bold text-sky-700">
                14
              </p>

              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                District Units
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Statewide representation connecting Technical
                Assistants throughout Kerala.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 sm:col-span-2">
              <h3 className="text-lg font-semibold text-slate-900">
                Our Commitment
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {organisationName} strives to empower Technical
                Assistants through continuous professional
                development, member welfare, knowledge sharing,
                digital transformation and ethical public service.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </PageSection>
  );
}