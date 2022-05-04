type birdCard = {
  num: number;
  title: string;
  interTitle: string;
  protectStatus: string;
  abbr: string;
  length: string | null;
  weight: string | null;
  wingspan: string | null;
  description: string;
};

type preserveCard = {
  num: number;
  presName: string;
  presOwner: string;
  area: number;
  foundYear: number;
  address: string;
};

type errorAPI = {
  code: string;
  errno: number;
  message: string;
  sql: string;
  sqlMessage: string;
  sqlState: string;
};

type successAPI = {
  affectedRows: number;
  fieldCount: number;
  info: string;
  insertId: number;
  serverStatus: number;
  warningStatus: number;
};

export type { birdCard, preserveCard, errorAPI, successAPI };
