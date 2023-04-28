import { buildLinearFunction, calculatePrometheeTwo } from 'promethee';

import { birdCard } from '../types/common';

const zodiac = require('zodiac-ts');

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
    name: 'Decrease forecasting',
    weight: 0.8,
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
  const alternatives = list.map((item) => {
    const { num, donates, protectStatusCost, presIncome, presExpenses, speciesRepresQty } = item;
    const expensePercentageFromIncome =
      protectStatusCost / presIncome - protectStatusCost / presExpenses;

    let isForecastDecreasing = false;
    if (donates && donates.split(',').length > 2) {
      const alpha = 0.4;
      const data = donates.split(',').map((el) => parseFloat(el));
      const DES = new zodiac.DoubleExponentialSmoothing(data, alpha);
      const forecast = DES.predict(3);
      isForecastDecreasing = data[data.length - 1] > forecast[forecast.length - 1];
    }

    return {
      identifier: num.toString(),
      evaluations: [
        expensePercentageFromIncome,
        Number(isForecastDecreasing),
        protectStatusCost,
        speciesRepresQty,
      ],
    };
  });

  const result = calculatePrometheeTwo({ alternatives, criteria });
  const resultList = result
    .map((resItem) => list.find((item) => item.num.toString() === resItem.alternativeIdentifier))
    .filter((resItem) => resItem !== undefined);

  return resultList as birdCard[];
};
