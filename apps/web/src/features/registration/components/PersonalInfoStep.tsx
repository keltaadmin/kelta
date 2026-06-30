'use client';

import type {
  PersonalInformation,
  RegistrationFormData,
} from '../types/registration.types';

interface PersonalInfoStepProps {
  data?: PersonalInformation;

  update: <
    K extends keyof RegistrationFormData,
  >(
    section: K,
    values: RegistrationFormData[K],
  ) => void;
}

export default function PersonalInfoStep({
  data,
}: PersonalInfoStepProps) {
  return (
    <div className="rounded-lg border p-6">
      <h2 className="text-xl font-semibold">
        Personal Information
      </h2>

      <p className="mt-2 text-slate-600">
        This step will capture the applicant's personal details.
      </p>

      <pre className="mt-6 text-xs">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}