import parse from 'html-react-parser';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { fetchBirdByNum } from '../../utils/serverAPI';
import { birdCard } from '../../types/common';
import AddBtn from '../List/Item/AddBtn/AddBtn';
import './ItemPage.scss';

const ItemPage = () => {
  const { birdId } = useParams();

  const [bird, setBird] = useState<birdCard>();

  useEffect(() => {
    const getPreserves = async () => {
      const response = await fetchBirdByNum(Number(birdId));
      if (response === 'error') {
        console.log('error');
      } else {
        const birdResp = response as birdCard;
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
              <img src={`${process.env.REACT_APP_IMAGES_URL}${birdId}.jpg`} alt={bird.title} />
            </div>
            <div className="item-body">
              <AddBtn cardId={Number(birdId)} />
              <h2 className="item-title">
                {bird.title} <span>(лат. {bird.interTitle})</span>
              </h2>
              <p className="item-desc desc_protect">
                Статус защиты {parse(`<abbr title="${bird.abbr}">${bird.protectStatus}</abbr>`)}
              </p>
              <p className="item-desc">
                {bird.length
                  ? `Примерная длина туловища ${parseFloat(bird.length) * 100} см`
                  : null}{' '}
              </p>
              <p className="item-desc">{bird.weight ? `Средний вес ${bird.weight} г` : null}</p>
              <p className="item-desc">
                {bird.wingspan ? `Размах крыльев ${parseFloat(bird.wingspan) * 100} см` : null}
              </p>
              <p className="item-desc desc_long">{bird.description}</p>
            </div>
          </article>
        )}
      </div>
    </section>
  );
};

export default ItemPage;
