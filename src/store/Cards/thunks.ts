import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchAllBirds } from '../../utils/serverAPI';
import { sortingType } from './types';

export const getBirdCards = createAsyncThunk(
  'auth/getCards',
  async (
    queryData: {
      searchInp: string;
      preserveNumSel: number;
      sortTypeInp: sortingType;
    },
    { rejectWithValue }
  ) => {
    try {
      const { searchInp, preserveNumSel, sortTypeInp } = queryData;
      const response = await fetchAllBirds(searchInp, preserveNumSel, sortTypeInp);

      if (typeof response === 'string') throw Error(response);

      return response;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);
