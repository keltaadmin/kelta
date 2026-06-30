'use client';

import { useState } from 'react';

import type {
  RegistrationFormData,
  RegistrationStep,
} from '../types/registration.types';

const TOTAL_STEPS = 4;

export function useRegistration() {
  const [step, setStep] =
    useState<RegistrationStep>(0);

  const [data, setData] =
    useState<Partial<RegistrationFormData>>({});

  const next = () =>
    setStep((value) =>
      value < TOTAL_STEPS - 1
        ? ((value + 1) as RegistrationStep)
        : value,
    );

  const previous = () =>
    setStep((value) =>
      value > 0
        ? ((value - 1) as RegistrationStep)
        : value,
    );

  const goTo = (
    step: RegistrationStep,
  ) => {
    setStep(step);
  };

  function update<
    K extends keyof RegistrationFormData,
  >(
    section: K,
    values: RegistrationFormData[K],
  ) {
    setData((previous) => ({
      ...previous,
      [section]: values,
    }));
  }

  function reset() {
    setData({});
    setStep(0);
  }

  return {
    step,
    totalSteps: TOTAL_STEPS,
    progress:
      ((step + 1) / TOTAL_STEPS) * 100,
    data,
    update,
    next,
    previous,
    goTo,
    reset,
  };
}