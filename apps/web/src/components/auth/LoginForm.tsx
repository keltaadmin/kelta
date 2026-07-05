'use client';

import { useState } from 'react';
import { z } from 'zod';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

import { loginSchema } from '@/lib/auth/auth.schema';
import { authService } from '@/lib/auth/auth.service';
import { useAuth } from '@/hooks/useAuth';

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { refresh } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  async function onSubmit(
    data: LoginFormValues,
  ) {
    setLoading(true);
    setError('');

    try {
      const response =
        await authService.login({
          email: data.email,
          password: data.password,
          rememberMe: data.rememberMe,
        });

      if (!response.success) {
        setError(response.message);
        return;
      }

      // Synchronize AuthContext with the authenticated user
      await refresh();

      // Replace history entry so the user cannot navigate
      // back to the login page after signing in.
      router.replace('/portal/dashboard');
    } catch (error) {
      console.error(
        'Login failed:',
        error,
      );

      setError(
        'Unexpected error occurred. Please try again.',
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      <input
        {...register('email')}
        type="email"
        placeholder="Email"
        autoComplete="email"
        disabled={loading}
        className={`w-full rounded px-3 py-2 disabled:opacity-60 ${
          errors.email
            ? 'border-red-500'
            : 'border'
        }`}
      />

      {errors.email && (
        <p className="text-sm text-red-600">
          {errors.email.message}
        </p>
      )}

      <input
        {...register('password')}
        type="password"
        placeholder="Password"
        autoComplete="current-password"
        disabled={loading}
        className={`w-full rounded px-3 py-2 disabled:opacity-60 ${
          errors.password
            ? 'border-red-500'
            : 'border'
        }`}
      />

      {errors.password && (
        <p className="text-sm text-red-600">
          {errors.password.message}
        </p>
      )}

      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          {...register('rememberMe')}
          disabled={loading}
        />

        Remember me
      </label>

      {error && (
        <div className="rounded-md border border-red-300 bg-red-50 p-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded bg-blue-600 py-2 text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading
          ? 'Signing in...'
          : 'Sign In'}
      </button>
    </form>
  );
}
