import { sortingType } from '../store/types/cards';
import { birdCard } from './common';

interface IFavouriteProps {
  data: birdCard;
}

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
  length: number;
  weight: number;
  wingspan: number;
  description: string;
  genus: number;
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

interface ISortBtnProps {
  className: string;
  type: sortingType.ASC | sortingType.DESC;
}

interface IItemProps {
  data: birdCard;
}

interface IAddBtnProps {
  cardId: number;
}

export type {
  IFavouriteProps,
  IDonateFormData,
  IAdminAddFormData,
  IAdminRemoveFormData,
  ILoginFormData,
  ISignUpFormData,
  ISortBtnProps,
  IItemProps,
  IAddBtnProps,
};
