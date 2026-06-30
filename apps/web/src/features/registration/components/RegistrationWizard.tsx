'use client';

import { useRegistration } from '../hooks/useRegistration';

import PersonalInfoStep from './PersonalInfoStep';
import ProfessionalStep from './ProfessionalStep';
import DocumentsStep from './DocumentsStep';
import ReviewStep from './ReviewStep';

const STEP_TITLES = [
  'Personal Information',
  'Professional Details',
  'Documents',
  'Review & Submit',
];

export default function RegistrationWizard() {
  const registration = useRegistration();

  function renderStep() {
    switch (registration.step) {
      case 0:
        return (
          <PersonalInfoStep
            data={registration.data.personal}
            update={registration.update}
          />
        );

      case 1:
        return (
          <ProfessionalStep
            data={registration.data.professional}
            update={registration.update}
          />
        );

      case 2:
        return (
          <DocumentsStep
            data={registration.data.documents}
            update={registration.update}
          />
        );

      default:
        return (
          <ReviewStep
            data={registration.data}
          />
        );
    }
  }

  return (
    <div className="mx-auto max-w-5xl rounded-xl bg-white p-8 shadow">

      <h1 className="mb-8 text-3xl font-bold">
        KELTA Membership Registration
      </h1>

      {/* Progress */}

      <div className="mb-10">

        <div className="mb-2 flex justify-between text-sm">

          <span>
            Step {registration.step + 1}
            {' '}
            of
            {' '}
            {registration.totalSteps}
          </span>

          <span>
            {Math.round(registration.progress)}
            %
          </span>

        </div>

        <div className="h-3 overflow-hidden rounded-full bg-slate-200">

          <div
            className="h-full bg-cyan-600 transition-all duration-300"
            style={{
              width: `${registration.progress}%`,
            }}
          />

        </div>

      </div>

      {/* Stepper */}

      <div className="mb-10 grid grid-cols-4 gap-4">

        {STEP_TITLES.map((title, index) => (

          <div
            key={title}
            className={`rounded-lg border p-4 text-center transition

            ${
              index === registration.step
                ? 'border-cyan-600 bg-cyan-50'
                : 'border-slate-200'
            }`}
          >

            <div className="text-lg font-semibold">
              {index + 1}
            </div>

            <div className="text-sm">
              {title}
            </div>

          </div>

        ))}

      </div>

      {/* Form */}

      {renderStep()}

      {/* Navigation */}

      <div className="mt-10 flex justify-between">

        <button
          type="button"
          onClick={registration.previous}
          disabled={registration.step === 0}
          className="rounded bg-slate-300 px-6 py-2 disabled:opacity-40"
        >
          Previous
        </button>

        {registration.step < 3 ? (

          <button
            type="button"
            onClick={registration.next}
            className="rounded bg-cyan-600 px-6 py-2 text-white"
          >
            Next
          </button>

        ) : (

          <button
            type="submit"
            className="rounded bg-green-600 px-6 py-2 text-white"
          >
            Submit Application
          </button>

        )}

      </div>

    </div>
  );
}