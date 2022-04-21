import { birdCard } from './common';

interface ISearchBarProps {
  updateSearch: (input: string) => void;
}

interface ISortBtnProps {
  className: string;
  type: 'ASC' | 'DESC';
  updateSort: (type: 'ASC' | 'DESC') => void;
}

interface IItemProps {
  data: birdCard;
}

export type { ISearchBarProps, ISortBtnProps, IItemProps };
