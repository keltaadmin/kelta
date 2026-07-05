import { AUTH } from '@/lib/auth/auth.constants';
import { clearSession } from '@/lib/auth/auth.session';
import { getSupabaseClient } from '@/lib/supabase/client';

export interface ApiRequestOptions
  extends RequestInit {
  authenticated?: boolean;
}

export class ApiClient {
  private readonly baseUrl =
    process.env.NEXT_PUBLIC_API_URL ??
    'http://localhost:3001/api/v1';

  private getAccessToken(): string | null {
    if (typeof window === 'undefined') {
      return null;
    }

    return localStorage.getItem(
      AUTH.ACCESS_TOKEN_KEY,
    );
  }

  private async handleUnauthorized(): Promise<void> {
    try {
      const supabase = getSupabaseClient();

      await supabase.auth.signOut();
    } catch (error) {
      console.error(
        'Failed to sign out from Supabase:',
        error,
      );
    }

    clearSession();

    if (typeof window !== 'undefined') {
      window.location.replace('/login');
    }
  }

  async request<T>(
    path: string,
    options: ApiRequestOptions = {},
  ): Promise<T> {
    const {
      authenticated = true,
      headers,
      ...rest
    } = options;

    const requestHeaders = new Headers(headers);

    if (!(rest.body instanceof FormData)) {
      requestHeaders.set(
        'Content-Type',
        'application/json',
      );
    }

    if (authenticated) {
      const token = this.getAccessToken();

      if (token) {
        requestHeaders.set(
          'Authorization',
          `Bearer ${token}`,
        );
      }
    }

    const response = await fetch(
      `${this.baseUrl}${path}`,
      {
        ...rest,
        headers: requestHeaders,
      },
    );

    if (response.status === 401) {
      await this.handleUnauthorized();

      throw new Error(
        'Your session has expired. Please sign in again.',
      );
    }

    if (!response.ok) {
      let message = response.statusText;

      try {
        const error =
          await response.json();

        message =
          error.message ??
          message;
      } catch {
        // Ignore JSON parsing errors.
      }

      throw new Error(message);
    }

    if (response.status === 204) {
      return undefined as T;
    }

    return response.json() as Promise<T>;
  }

  get<T>(path: string) {
    return this.request<T>(path, {
      method: 'GET',
    });
  }

  post<T>(
    path: string,
    body?: unknown,
  ) {
    return this.request<T>(path, {
      method: 'POST',
      body:
        body === undefined
          ? undefined
          : JSON.stringify(body),
          });
        }

  patch<T>(
    path: string,
    body?: unknown,
  ) {
    return this.request<T>(path, {
      method: 'PATCH',
      body:
        body === undefined
          ? undefined
          : JSON.stringify(body),
          });
        }

  put<T>(
    path: string,
    body?: unknown,
  ) {
    return this.request<T>(path, {
      method: 'PUT',
      body:
        body === undefined
          ? undefined
          : JSON.stringify(body),
      });
    }

  delete<T>(path: string) {
    return this.request<T>(path, {
      method: 'DELETE',
    });
  }
}

export const apiClient =
  new ApiClient();
