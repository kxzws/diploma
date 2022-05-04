import { cardsAction, cardsState, cardsActionType, sortingType } from '../types/cards';

const initialState: cardsState = {
  isLoading: false,
  isError: false,
  cards: [],
  search: '',
  sortType: sortingType.ASC,
};

const cardsReducer = (state: cardsState = initialState, action: cardsAction): cardsState => {
  switch (action.type) {
    case cardsActionType.FETCH_CARDS:
      return { ...state, isLoading: true };
    case cardsActionType.FETCH_CARDS_SUCCESS:
      return { ...state, isLoading: false, cards: action.payload };
    case cardsActionType.FETCH_CARDS_ERROR:
      return { ...state, isLoading: false, isError: action.payload };
    case cardsActionType.UPDATE_SEARCH:
      return { ...state, search: action.payload };
    case cardsActionType.CHANGE_SORT_TYPE:
      return { ...state, sortType: action.payload };
    default:
      return state;
  }
};

export default cardsReducer;
