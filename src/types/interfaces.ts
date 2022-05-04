import { sortingType } from '../store/types/cards';
import { birdCard } from './common';

interface ISortBtnProps {
  className: string;
  type: sortingType.ASC | sortingType.DESC;
}

interface IItemProps {
  data: birdCard;
}

export type { ISortBtnProps, IItemProps };
