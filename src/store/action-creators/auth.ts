import { Dispatch } from 'react';
import { userCard } from '../../types/common';
import { loginUserData, registerUserData } from '../../utils/preserves3k6sAPI';
import { authAction, authActionType } from '../types/auth';

const logout = () => {
  return { type: authActionType.LOGOUT };
};

const fetchLoginData = (nick: string, pass: string) => {
  return async (dispatch: Dispatch<authAction>) => {
    const response = await loginUserData(nick, pass);
    if (response === 'error') {
      console.log('fetchlogin получил error');
    } else {
      const users = response as userCard[];
      if (users.length < 1) {
        console.log('не зашел');
      } else if (users[0].isAdmin) {
        dispatch({ type: authActionType.LOGIN_ADMIN, payload: nick });
      } else {
        dispatch({ type: authActionType.LOGIN_USER, payload: nick });
      }
    }
  };
};

const fetchRegisterData = (nick: string, pass: string, mail: string, phone: string) => {
  return async (dispatch: Dispatch<authAction>) => {
    const response = await registerUserData(nick, pass, mail, phone);
    if (response === 'error') {
      console.log('fetchregister получил error');
    }
  };
};

export { logout, fetchLoginData, fetchRegisterData };
