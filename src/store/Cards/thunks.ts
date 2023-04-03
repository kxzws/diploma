import { createAsyncThunk } from '@reduxjs/toolkit';

import { getAllBirds } from '../../utils/preserves3k6sAPI';
import { sortingType } from './types';

export const getBirdCards = createAsyncThunk(
  'auth/getCards',
  async (
    queryData: {
      searchInp: string;
      sortTypeInp: sortingType.ASC | sortingType.DESC;
    },
    { rejectWithValue }
  ) => {
    try {
      const { searchInp, sortTypeInp } = queryData;
      const response = await getAllBirds(searchInp, sortTypeInp);

      if (typeof response === 'string') throw Error(response);

      return response;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);
