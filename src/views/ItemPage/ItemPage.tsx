import parse from 'html-react-parser';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { fetchBirdByNum } from '../../utils/serverAPI';
import { birdCard } from '../../types/common';
import AddBtn from '../List/Item/AddBtn/AddBtn';
import './ItemPage.scss';

const ItemPage = () => {
  const { birdId } = useParams();

  const [bird, setBird] = useState<birdCard[]>();

  useEffect(() => {
    const getPreserves = async () => {
      const response = await fetchBirdByNum(Number(birdId));
      if (response === 'error') {
        console.log('error');
      } else {
        const birdResp = response as birdCard[];
        setBird(birdResp);
      }
    };
    if (birdId) getPreserves();
  }, [birdId]);

  return (
    <section className="item-page">
      <div className="center-container">
        {birdId === undefined || bird === undefined ? (
          <p className="item-warning">Вид не найден</p>
        ) : (
          <article className="item-card">
            <div className="item-img">
              <img src={`${process.env.REACT_APP_IMAGES_URL}${birdId}.jpg`} alt={bird[0].title} />
            </div>
            <div className="item-body">
              <AddBtn cardId={Number(birdId)} />
              <h2 className="item-title">
                {bird[0].title} <span>(лат. {bird[0].interTitle})</span>
              </h2>
              <p className="item-desc desc_protect">
                Статус защиты{' '}
                {parse(`<abbr title="${bird[0].abbr}">${bird[0].protectStatus}</abbr>`)}
              </p>
              <p className="item-desc">
                {bird[0].length
                  ? `Примерная длина туловища ${parseFloat(bird[0].length) * 100} см`
                  : null}{' '}
              </p>
              <p className="item-desc">
                {bird[0].weight ? `Средний вес ${bird[0].weight} г` : null}
              </p>
              <p className="item-desc">
                {bird[0].wingspan
                  ? `Размах крыльев ${parseFloat(bird[0].wingspan) * 100} см`
                  : null}
              </p>
              <p className="item-desc desc_long">{bird[0].description}</p>

              <table>
                <thead>
                  <tr>
                    <th>Заповедник</th>
                    <th>Количество особей</th>
                    <th>Минимальное % соотношение расходов на вид</th>
                    <th>Реальное % соотношение расходов на вид</th>
                    <th>Покрываемость расходов на вид</th>
                  </tr>
                </thead>
                <tbody>
                  {bird.map((birb) => (
                    <tr key={birb.presName}>
                      <td>{birb.presName}</td>
                      <td>{birb.speciesRepresQty}</td>
                      <td>{((birb.protectStatusCost / birb.presExpenses) * 100).toFixed(3)}</td>
                      <td>{((birb.protectStatusCost / birb.presIncome) * 100).toFixed(3)}</td>
                      <td>
                        {(birb.protectStatusCost / birb.presIncome -
                          birb.protectStatusCost / birb.presExpenses) *
                          100 >
                        0
                          ? 'недостаточная'
                          : 'достаточная'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>
        )}
      </div>
    </section>
  );
};

export default ItemPage;
