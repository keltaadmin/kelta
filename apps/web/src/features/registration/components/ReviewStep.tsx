'use client';

import type { RegistrationFormData } from '../types/registration.types';

interface ReviewStepProps {
  data: Partial<RegistrationFormData>;
}

export default function ReviewStep({
  data,
}: ReviewStepProps) {
  return (
    <div className="rounded-lg border p-6">
      <h2 className="text-xl font-semibold">
        Review & Submit
      </h2>

      <pre className="mt-6 text-xs">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}