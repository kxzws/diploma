import { sortingType } from '../store/Cards/types';
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

export const fetchAllBirds = async (
  search: string,
  preserveNum: number,
  sort: sortingType
): Promise<string | birdCard[]> => {
  let getRequestURL: string;
  if (search) {
    getRequestURL = `${process.env.REACT_APP_API_URL}birds/${search}/${preserveNum}/${sort}`;
  } else {
    getRequestURL = `${process.env.REACT_APP_API_URL}birds/${preserveNum}/${sort}`;
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

export const fetchAllGenuses = async (): Promise<string | genusCard[]> => {
  const getRequestURL = `${process.env.REACT_APP_API_URL}genuses`;
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

export const fetchBirdByNum = async (num: number): Promise<string | birdCard[]> => {
  const getRequestURL = `${process.env.REACT_APP_API_URL}birds/${num}`;
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

export const fetchAllStatuses = async (): Promise<string | protectStatusCard[]> => {
  const getRequestURL = `${process.env.REACT_APP_API_URL}statuses`;
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
  const getRequestURL = `${process.env.REACT_APP_API_URL}add-species`;
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
  const getRequestURL = `${process.env.REACT_APP_API_URL}delete-species/${speciesId}`;
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

export const fetchAllPreserves = async (): Promise<string | preserveCard[]> => {
  const getRequestURL = `${process.env.REACT_APP_API_URL}preserves`;
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

export const fetchRating = async (): Promise<string | ratingCard[]> => {
  const getRequestURL = `${process.env.REACT_APP_API_URL}rating`;
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

export const fetchFinance = async (): Promise<string | financeCard[]> => {
  const getRequestURL = `${process.env.REACT_APP_API_URL}finance`;
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

export const loginUserData = async (nick: string, pass: string): Promise<string | userCard[]> => {
  const getRequestURL = `${process.env.REACT_APP_API_URL}login`;
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
  const getRequestURL = `${process.env.REACT_APP_API_URL}register`;
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

export const postDonate = async (
  species: number[],
  preserve: number,
  amount: number,
  nick: string
): Promise<string | successPostAPI> => {
  const getRequestURL = `${process.env.REACT_APP_API_URL}donate`;
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

export const makeBackup = async (): Promise<string | birdCard[]> => {
  const getRequestURL = `${process.env.REACT_APP_API_URL}backup`;
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
