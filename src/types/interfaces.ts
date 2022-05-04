import { sortingType } from '../store/types/cards';
import { birdCard } from './common';

interface IFavouriteProps {
  data: birdCard;
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

export type { IFavouriteProps, ISortBtnProps, IItemProps, IAddBtnProps };
