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

type genusCard = {
  num: number;
  genusName: string;
};

type ratingCard = {
  user: string;
  amount: number;
};


type financeCard = {
  presName: string;
  annualStateBudget: number;
  donateAmount: string;
  staffCost: number;
  speciesCost: number;
};

type protectStatusCard = {
  num: number;
  longName: string;
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

type successPostAPI = {
  affectedRows: number;
  fieldCount: number;
  info: string;
  insertId: number;
  serverStatus: number;
  warningStatus: number;
};

type userCard = {
  userName: string;
  isAdmin: boolean;
};

export type {
  birdCard,
  genusCard,
  ratingCard,
  financeCard,
  protectStatusCard,
  preserveCard,
  errorAPI,
  successPostAPI,
  userCard,
};
