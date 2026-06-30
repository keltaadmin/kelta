export interface PersonalInformation {
  full_name: string;
  date_of_birth: string;
  gender: 'Male' | 'Female' | 'Other';

  email: string;
  mobile: string;

  address_line1: string;
  address_line2?: string;

  city: string;

  pin_code: string;

  district_id: string;
}

export interface ProfessionalInformation {
  posting_name: string;

  posting_type:
    | 'Grama Panchayat'
    | 'Municipality'
    | 'Corporation';

  designation: string;

  member_type:
    | 'Regular'
    | 'Life'
    | 'Honorary'
    | 'Volunteer'
    | 'Trainer'
    | 'Resource Person';
}

export interface UploadedDocuments {
  photo?: File;

  id_proof?: File;

  address_proof?: File;

  experience_certificate?: File;
}

export interface RegistrationFormData {
  personal: PersonalInformation;

  professional: ProfessionalInformation;

  documents: UploadedDocuments;
}

export type RegistrationStep =
  | 0
  | 1
  | 2
  | 3;