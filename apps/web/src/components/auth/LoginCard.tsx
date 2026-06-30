'use client';

import LoginForm from './LoginForm';

export default function LoginCard() {
  return (
    <div className="w-full max-w-md rounded-xl border bg-white p-8 shadow-lg">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">
          KELTA Portal
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Sign in to continue
        </p>
      </div>

      <LoginForm />
    </div>
  );
}