import { birdCard } from '../../types/common';

// eslint-disable-next-line no-shadow
export enum sortingType {
  ASC = 'ASC',
  DESC = 'DESC',
}

export interface ICardsState {
  isLoading: boolean;
  isError: boolean;
  cards: birdCard[];
  search: string;
  sortType: sortingType.ASC | sortingType.DESC;
  favourites: birdCard[];
}
