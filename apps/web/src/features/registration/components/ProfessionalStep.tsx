'use client';

import type {
  ProfessionalInformation,
  RegistrationFormData,
} from '../types/registration.types';

interface ProfessionalStepProps {
  data?: ProfessionalInformation;

  update: <
    K extends keyof RegistrationFormData,
  >(
    section: K,
    values: RegistrationFormData[K],
  ) => void;
}

export default function ProfessionalStep({
  data,
}: ProfessionalStepProps) {
  return (
    <div className="rounded-lg border p-6">
      <h2 className="text-xl font-semibold">
        Professional Details
      </h2>

      <pre className="mt-6 text-xs">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}