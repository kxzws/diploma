import { NavLink } from 'react-router-dom';

import useTypedSelector from '../../hooks/useTypedSelector';
import Favourite from './Favourite/Favourite';
import './Favourites.scss';

const Favourites = () => {
  const { favourites } = useTypedSelector((state) => state.cards);

  return (
    <section className="favourites">
      <div className="center-container">
        <ul className="favourites-list">
          {favourites.map((item) => (
            <Favourite key={item.num} data={item} />
          ))}
          {favourites.length < 1 && <p className="favourites-warning">Избранных нет</p>}
        </ul>
      </div>
      {favourites.length > 0 && <NavLink to="/donate">Помочь</NavLink>}
    </section>
  );
};

export default Favourites;
