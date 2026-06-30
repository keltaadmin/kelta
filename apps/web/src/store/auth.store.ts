import { SessionData } from '@/types/session';

class AuthStore {
  private session: SessionData = {
    accessToken: null,
    refreshToken: null,
    user: null,
  };

  getSession() {
    return this.session;
  }

  setSession(session: SessionData) {
    this.session = session;
  }

  clear() {
    this.session = {
      accessToken: null,
      refreshToken: null,
      user: null,
    };
  }
}

export const authStore = new AuthStore();