import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { userCard } from '../../types/common';
import { getLoginData } from './thunks';
import { IAuthState } from './types';

const initialState: IAuthState = {
  isLoading: false,
  isError: false,
  nickname: null,
  isAdmin: false,
  isAuthorized: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.nickname = null;
      state.isAdmin = false;
      state.isAuthorized = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLoginData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getLoginData.fulfilled, (state, action: PayloadAction<userCard[]>) => {
        const { payload } = action;

        if (payload.length > 0) {
          state.isAuthorized = true;
          state.nickname = payload[0].userName;
          state.isAdmin = payload[0].isAdmin;
        } else {
          state.nickname = null;
          state.isAdmin = false;
          state.isAuthorized = false;
        }

        state.isLoading = false;
        state.isError = false;
      })
      .addCase(getLoginData.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default authSlice.reducer;
