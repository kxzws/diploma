import {
  birdCard,
  errorAPI,
  genusCard,
  preserveCard,
  protectStatusCard,
  ratingCard,
  financeCard,
  successPostAPI,
  userCard,
} from '../types/common';
import { API_URL } from './constants';

export const makeBackup = async (): Promise<string | birdCard[]> => {
  const getRequestURL = `${API_URL}backup`;
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

export const getRating = async (): Promise<string | ratingCard[]> => {
  const getRequestURL = `${API_URL}rating`;
  const response: ratingCard[] | string = await fetch(getRequestURL)
    .then((res) => res.json())
    .then(
      (result: ratingCard[]) => {
        return result;
      },
      (error: errorAPI) => {
        return 'error';
      }
    );
  return response;
};

export const getFinance = async (): Promise<string | financeCard[]> => {
  const getRequestURL = `${API_URL}finance`;
  const response: financeCard[] | string = await fetch(getRequestURL)
    .then((res) => res.json())
    .then(
      (result: financeCard[]) => {
        return result;
      },
      (error: errorAPI) => {
        return 'error';
      }
    );
  return response;
};

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

export const getAllstatuses = async (): Promise<string | protectStatusCard[]> => {
  const getRequestURL = `${API_URL}statuses`;
  const response: protectStatusCard[] | string = await fetch(getRequestURL)
    .then((res) => res.json())
    .then(
      (result: protectStatusCard[]) => {
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

export const postBirdSpecies = async (
  name: string,
  length: number | null,
  weight: number | null,
  wingspan: number | null,
  descr: string | null,
  genusId: number,
  protectStatusId: number,
  preserveId: number
): Promise<string | successPostAPI[]> => {
  const getRequestURL = `${API_URL}add-species`;
  const species = {
    name,
    length,
    weight,
    wingspan,
    descr,
    genusId,
    protectStatusId,
    preserveId,
  };
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(species),
  };
  const response: successPostAPI[] | string = await fetch(getRequestURL, requestOptions)
    .then((res) => res.json())
    .then(
      (result: successPostAPI[]) => {
        return result;
      },
      (error: errorAPI[]) => {
        console.log(error[0].sqlMessage, error[1].sqlMessage);
        console.log(error[0].sql, error[1].sql);
        return 'error';
      }
    );
  return response;
};

export const deleteBirdSpecies = async (speciesId: number): Promise<string | successPostAPI> => {
  const getRequestURL = `${API_URL}delete-species/${speciesId}`;
  const requestOptions = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
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
