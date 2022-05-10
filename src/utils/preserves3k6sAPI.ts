import {
  birdCard,
  errorAPI,
  genusCard,
  preserveCard,
  successPostAPI,
  userCard,
} from '../types/common';
import { API_URL } from './constants';

export const getAllBirds = async (
  search: string,
  sort: 'ASC' | 'DESC'
): Promise<string | birdCard[]> => {
  let getRequestURL: string;
  if (search) {
    getRequestURL = `${API_URL}birds/${search}/${sort}`;
  } else {
    getRequestURL = `${API_URL}birds/${sort}`;
  }
  const response: birdCard[] | string = await fetch(getRequestURL)
    .then((res) => res.json())
    .then(
      (result: birdCard[]) => {
        return result;
      },
      (error: errorAPI) => {
        return 'error';
      }
    );
  return response;
};

export const getAllpreserves = async (): Promise<string | preserveCard[]> => {
  const getRequestURL = `${API_URL}preserves`;
  const response: preserveCard[] | string = await fetch(getRequestURL)
    .then((res) => res.json())
    .then(
      (result: preserveCard[]) => {
        return result;
      },
      (error: errorAPI) => {
        return 'error';
      }
    );
  return response;
};

export const getAllgenuses = async (): Promise<string | genusCard[]> => {
  const getRequestURL = `${API_URL}genuses`;
  const response: genusCard[] | string = await fetch(getRequestURL)
    .then((res) => res.json())
    .then(
      (result: genusCard[]) => {
        return result;
      },
      (error: errorAPI) => {
        return 'error';
      }
    );
  return response;
};

export const postDonate = async (
  species: number[],
  preserve: number,
  amount: number,
  nick: string
): Promise<string | successPostAPI> => {
  const getRequestURL = `${API_URL}donate`;
  const donate = {
    species,
    preserve,
    amount,
    nick,
  };
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(donate),
  };
  const response: successPostAPI | string = await fetch(getRequestURL, requestOptions)
    .then((res) => res.json())
    .then(
      (result: successPostAPI) => {
        return result;
      },
      (error: errorAPI) => {
        console.log(error.sqlMessage);
        console.log(error.sql);
        return 'error';
      }
    );
  return response;
};

export const loginUserData = async (nick: string, pass: string): Promise<string | userCard[]> => {
  const getRequestURL = `${API_URL}login`;
  const user = {
    nick,
    pass,
  };
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(user),
  };
  const response: userCard[] | string = await fetch(getRequestURL, requestOptions)
    .then((res) => res.json())
    .then(
      (result: userCard[]) => {
        return result;
      },
      (error: errorAPI) => {
        console.log(error.sqlMessage);
        console.log(error.sql);
        return 'error';
      }
    );
  return response;
};

export const registerUserData = async (
  nick: string,
  pass: string,
  mail: string,
  phone: string
): Promise<string | successPostAPI> => {
  const getRequestURL = `${API_URL}register`;
  const user = {
    nick,
    pass,
    mail,
    phone,
  };
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(user),
  };
  const response: successPostAPI | string = await fetch(getRequestURL, requestOptions)
    .then((res) => res.json())
    .then(
      (result: successPostAPI) => {
        return result;
      },
      (error: errorAPI) => {
        console.log(error.sqlMessage);
        console.log(error.sql);
        return 'error';
      }
    );
  return response;
};
