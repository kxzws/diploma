import { birdCard } from '../types/common';
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
      (error) => {
        return 'error';
      }
    );
  return response;
};
