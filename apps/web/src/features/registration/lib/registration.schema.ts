import { z } from 'zod';

export const personalSchema = z.object({
  full_name: z
    .string()
    .trim()
    .min(3)
    .max(100),

  date_of_birth: z.string(),

  gender: z.enum([
    'Male',
    'Female',
    'Other',
  ]),

  email: z
    .string()
    .email(),

  mobile: z
    .string()
    .regex(/^[6-9]\d{9}$/),

  address_line1: z
    .string()
    .min(5),

  address_line2: z
    .string()
    .optional(),

  city: z
    .string()
    .min(2),

  pin_code: z
    .string()
    .regex(/^\d{6}$/),

  district_id: z.string().uuid(),
});

export const professionalSchema = z.object({
  posting_name: z
    .string()
    .min(2),

  posting_type: z.enum([
    'Grama Panchayat',
    'Municipality',
    'Corporation',
  ]),

  designation: z
    .string()
    .min(2),

  member_type: z.enum([
    'Regular',
    'Life',
    'Honorary',
    'Volunteer',
    'Trainer',
    'Resource Person',
  ]),
});

export const documentsSchema = z.object({
  photo: z.instanceof(File).optional(),

  id_proof: z.instanceof(File).optional(),

  address_proof: z.instanceof(File).optional(),

  experience_certificate:
    z.instanceof(File).optional(),
});

export const registrationSchema =
  personalSchema
    .merge(professionalSchema)
    .merge(documentsSchema);

export const STEP_TITLES = [
  'Personal Information',
  'Professional Information',
  'Documents',
  'Review',
] as const;