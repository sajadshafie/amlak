export interface formType {
  password: string;
  re_password: string;
  phone_number: string;
  name_family: string;
  code_national: number | null;
  city: string;
  address: string;
}

export interface confirmType {
  confirm_code: string;
}

export interface authLayoutType {
  children: React.ReactNode;
  title: string;
  sub_title: string;
  description: string;
  stepNumber: number;
  step: string[];
  text_is_register: string;
  text_sub_register: string;
  link: string;
}

export interface authType {
  sheba_number: number | null;
  name: string;
  image_national_card: any;
  number_certificate: number | null;
}
