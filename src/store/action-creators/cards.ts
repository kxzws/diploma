import { Dispatch } from 'react';
import { cardsAction, cardsActionType, sortingType } from '../types/cards';
import { getAllBirds } from '../../utils/preserves3k6sAPI';
import { birdCard } from '../../types/common';

const updateSearch = (input: string) => {
  return { type: cardsActionType.UPDATE_SEARCH, payload: input };
};

const changeSortType = (input: sortingType.ASC | sortingType.DESC) => {
  return { type: cardsActionType.CHANGE_SORT_TYPE, payload: input };
};

const addFavourite = (data: birdCard) => {
  return { type: cardsActionType.ADD_FAVOURITE, payload: data };
};

const removeFavourite = (data: birdCard) => {
  return { type: cardsActionType.REMOVE_FAVOURITE, payload: data };
};

const clearFavourites = () => {
  return { type: cardsActionType.CLEAR_FAVOURITE };
};

const fetchCards = (searchInp: string, sortTypeInp: sortingType.ASC | sortingType.DESC) => {
  return async (dispatch: Dispatch<cardsAction>) => {
    dispatch({ type: cardsActionType.FETCH_CARDS });
    const response = await getAllBirds(searchInp, sortTypeInp);
    if (response === 'error') {
      dispatch({ type: cardsActionType.FETCH_CARDS_ERROR, payload: true });
    } else {
      const photos = response as birdCard[];
      dispatch({ type: cardsActionType.FETCH_CARDS_SUCCESS, payload: photos });
    }
  };
};

export { updateSearch, changeSortType, fetchCards, addFavourite, removeFavourite, clearFavourites };
