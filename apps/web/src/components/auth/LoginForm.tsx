'use client';

import { useState } from 'react';
import { z } from 'zod';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { loginSchema } from '@/lib/auth/auth.schema';
import { authService } from '@/lib/auth/auth.service';

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  async function onSubmit(data: LoginFormValues) {
    setLoading(true);
    setError('');

    try {
      const response = await authService.login({
        email: data.email,
        password: data.password,
        rememberMe: data.rememberMe,
      });

      if (!response.success) {
        setError(response.message);
        return;
      }

      // TODO:
      // router.push('/dashboard');
    } catch (err) {
      console.error(err);
      setError(
        'Unexpected error occurred. Please try again.'
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
        className="w-full rounded border px-3 py-2"
      />

      <input
        {...register('password')}
        type="password"
        placeholder="Password"
        autoComplete="current-password"
        className="w-full rounded border px-3 py-2"
      />

      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          {...register('rememberMe')}
        />
        Remember me
      </label>

      {error && (
        <p className="text-sm text-red-600">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded bg-blue-600 py-2 text-white disabled:opacity-60"
      >
        {loading ? 'Signing in...' : 'Sign In'}
      </button>
    </form>
  );
}