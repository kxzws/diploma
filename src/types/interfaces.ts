interface IDonateFormData {
  indexes: number[];
  preserve: number;
  donate: number;
  cardNumber: number;
  cardDate: Date;
  cardCVV: number;
}

interface IAdminAddFormData {
  name: string;
  length: number | null;
  weight: number | null;
  wingspan: number | null;
  description: string | null;
  genus: number;
  protectStatus: number;
  preserve: number;
}

interface IAdminRemoveFormData {
  species: number;
}

interface ILoginFormData {
  login: string;
  password: string;
}

interface ISignUpFormData {
  login: string;
  password: string;
  mail: string;
  phone: string;
}

export type {
  IDonateFormData,
  IAdminAddFormData,
  IAdminRemoveFormData,
  ILoginFormData,
  ISignUpFormData,
};
