import './Rating.scss';
import { useEffect, useState } from 'react';
import { ratingCard } from '../../types/common';
import { getRating } from '../../utils/preserves3k6sAPI';

const Rating = () => {
  const [donaters, setDonaters] = useState<ratingCard[]>([]);

  useEffect(() => {
    const getDonaters = async () => {
      const response = await getRating();
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
            // eslint-disable-next-line react/no-array-index-key
            <li key={ind} className="rating-item">
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
