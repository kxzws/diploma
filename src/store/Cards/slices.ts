import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getBirdCards } from './thunks';
import { sortByNeediness } from '../../utils/sortByNeediness';
import { birdCard } from '../../types/common';
import { ICardsState, sortingType } from './types';

const initialState: ICardsState = {
  isLoading: false,
  isError: false,
  cards: [],
  search: '',
  preserveNum: 1,
  sortType: sortingType.NEEDY,
  favourites: [],
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    updateSearch(state, action: PayloadAction<string>) {
      const { payload } = action;
      state.search = payload;
    },
    changePreserve(state, action: PayloadAction<number>) {
      const { payload } = action;
      state.preserveNum = payload;
    },
    changeSortType(state, action: PayloadAction<sortingType>) {
      const { payload } = action;
      state.sortType = payload;
    },
    addFavourite(state, action: PayloadAction<birdCard>) {
      const { payload } = action;
      state.favourites.push(payload);
    },
    removeFavourite(state, action: PayloadAction<birdCard>) {
      const { payload } = action;
      const arrCopy = state.favourites.slice();
      state.favourites = arrCopy.filter((item) => item.num !== payload.num);
    },
    clearFavourites(state) {
      state.favourites = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBirdCards.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBirdCards.fulfilled, (state, action: PayloadAction<birdCard[]>) => {
        const { payload } = action;
        state.cards = state.sortType === sortingType.NEEDY ? sortByNeediness(payload) : payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(getBirdCards.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default cardsSlice.reducer;
