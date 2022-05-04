import { birdCard, errorAPI, preserveCard, successAPI } from '../types/common';
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

export const postDonate = async (
  species: number[],
  preserve: number,
  amount: number,
  nick: string
): Promise<string | successAPI> => {
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
  const response: successAPI | string = await fetch(getRequestURL, requestOptions)
    .then((res) => res.json())
    .then(
      (result: successAPI) => {
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
