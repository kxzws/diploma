import { useEffect, useState } from 'react';

import { fetchRating } from '../../utils/serverAPI';
import { ratingCard } from '../../types/common';
import './Rating.scss';

const Rating = () => {
  const [donaters, setDonaters] = useState<ratingCard[]>([]);

  useEffect(() => {
    const getDonaters = async () => {
      const response = await fetchRating();
      if (response === 'error') {
        console.log('error');
      } else {
        const donatersArr = response as ratingCard[];
        setDonaters(donatersArr);
      }
    };
    getDonaters();
  }, []);

  return (
    <section className="rating">
      <div className="center-container">
        <h2 className="rating-title">Топ-3 донатеров</h2>
        <ul className="rating-list">
          {donaters.map((item, ind) => (
            <li key={`${ind + 1}${item.user}`} className="rating-item">
              <i className="rating-nick">{item.user}</i> -{' '}
              <b className="rating-amount">{item.amount}</b> USD
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Rating;
