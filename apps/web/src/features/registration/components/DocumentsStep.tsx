'use client';

import type {
  UploadedDocuments,
  RegistrationFormData,
} from '../types/registration.types';

interface DocumentsStepProps {
  data?: UploadedDocuments;

  update: <
    K extends keyof RegistrationFormData,
  >(
    section: K,
    values: RegistrationFormData[K],
  ) => void;
}

export default function DocumentsStep({
  data,
}: DocumentsStepProps) {
  return (
    <div className="rounded-lg border p-6">
      <h2 className="text-xl font-semibold">
        Documents
      </h2>

      <pre className="mt-6 text-xs">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}