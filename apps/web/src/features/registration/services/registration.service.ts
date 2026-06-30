import axios from 'axios';

import type {
  RegistrationFormData,
} from '../types/registration.types';

const api = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_URL,
});

export const registrationService = {
  async saveDraft(
    data: Partial<RegistrationFormData>,
  ) {
    return api.post(
      '/membership-applications/draft',
      data,
    );
  },

  async submit(
    data: RegistrationFormData,
  ) {
    return api.post(
      '/membership-applications',
      data,
    );
  },

  async getDistricts() {
    return api.get('/districts');
  },
};