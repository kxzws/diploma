import { birdCard } from '../../types/common';

// eslint-disable-next-line no-shadow
export enum sortingType {
  NEEDY = 'NEEDY',
  ASC = 'ASC',
  DESC = 'DESC',
}

export interface ICardsState {
  isLoading: boolean;
  isError: boolean;
  cards: birdCard[];
  search: string;
  preserveNum: number;
  sortType: sortingType;
  favourites: birdCard[];
}
