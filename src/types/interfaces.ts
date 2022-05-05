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
  ILoginFormData,
  ISignUpFormData,
  ISortBtnProps,
  IItemProps,
  IAddBtnProps,
};
