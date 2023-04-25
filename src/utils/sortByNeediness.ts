import { buildLinearFunction, calculatePrometheeTwo } from 'promethee';

import { birdCard } from '../types/common';

const criteria = [
  {
    name: 'Expense percentage from income',
    weight: 1,
    objective: 'maximize' as 'maximize' | 'minimize',
    preferenceFunction: buildLinearFunction({
      preference: 1,
      indifference: 0,
    }),
  },
  {
    name: 'Maintenance cost',
    weight: 0.4,
    objective: 'maximize' as 'maximize' | 'minimize',
    preferenceFunction: buildLinearFunction({
      preference: 1000,
      indifference: 0,
    }),
  },
  {
    name: 'Representatives quantity',
    weight: 0.3,
    objective: 'maximize' as 'maximize' | 'minimize',
    preferenceFunction: buildLinearFunction({
      preference: 1000,
      indifference: 0,
    }),
  },
];

export const sortByNeediness = (list: birdCard[]): birdCard[] => {
  const alternatives = list.map((item) => ({
    identifier: item.num.toString(),
    evaluations: [
      item.protectStatusCost / item.presIncome - item.protectStatusCost / item.presExpenses,
      item.protectStatusCost,
      item.speciesRepresQty,
    ],
  }));

  const result = calculatePrometheeTwo({ alternatives, criteria });
  const resultList = result
    .map((resItem) => list.find((item) => item.num.toString() === resItem.alternativeIdentifier))
    .filter((resItem) => resItem !== undefined);

  return resultList as birdCard[];
};
