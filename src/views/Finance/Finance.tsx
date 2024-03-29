import { useEffect, useState } from 'react';
import Chart from 'react-google-charts';

import { fetchFinance } from '../../utils/serverAPI';
import { financeCard } from '../../types/common';
import Loading from '../../components/Loading/Loading';
import './Finance.scss';

const Finance = () => {
  const [finances, setFinances] = useState<financeCard[]>([]);

  useEffect(() => {
    const getFinancesFirst = async () => {
      const response = await fetchFinance();
      if (response === 'error') {
        console.log('error');
      } else {
        const donatersArr = response as financeCard[];
        setFinances(donatersArr);
      }
    };
    getFinancesFirst();
  }, []);

  const histogramData = [
    ['Заповедник', 'Доходы', 'Расходы'],
    ...finances.map((fin) => [
      fin.presName,
      fin.annualStateBudget + parseFloat(fin.donateAmount),
      fin.staffCost + fin.speciesCost,
    ]),
  ];

  const chartOptions = {
    title: 'Статистика годовых расходов и доходов',
    chartArea: { width: '60%' },
    hAxis: {
      title: 'Финансы',
    },
    vAxis: {
      title: 'Заповедник',
    },
    colors: ['#238823', '#D2222D'],
  };

  return (
    <section className="finance">
      <div className="center-container">
        <h4 className="finance-title">Cтатистика финансов заповедников за год</h4>
        <Chart
          chartType="BarChart"
          width="1300px"
          height="600px"
          loader={<Loading />}
          data={histogramData}
          options={chartOptions}
        />
        <br />
        <h4 className="finance-subtitle">Итоги</h4>
        <ul className="finance-list">
          {finances.map((item) => {
            const total =
              item.annualStateBudget -
              item.staffCost -
              item.speciesCost +
              parseFloat(item.donateAmount);

            return (
              <li key={item.presName} className="finance-item">
                <span className="finance-name">{item.presName}</span> –{' '}
                <i className={`finance-qty qty-${total < 0 ? 'neg' : 'pos'}`}>{total.toFixed(3)}</i>{' '}
                USD
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Finance;
