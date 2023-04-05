import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginUserData, registerUserData } from '../../utils/serverAPI';

export const getLoginData = createAsyncThunk(
  'auth/getLogin',
  async (
    queryData: {
      nick: string;
      pass: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const { nick, pass } = queryData;
      const response = await loginUserData(nick, pass);

      if (typeof response === 'string') throw Error(response);

      return response;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const getRegisterData = createAsyncThunk(
  'auth/getRegister',
  async (
    queryData: {
      nick: string;
      pass: string;
      mail: string;
      phone: string;
    },
    { rejectWithValue }
  ) => {
    // try {
    //   const { nick, pass, mail, phone } = queryData;
    //   const response = await registerUserData(nick, pass, mail, phone);
    //   return response;
    // } catch (error) {
    //   return rejectWithValue((error as Error).message);
    // }
  }
);
