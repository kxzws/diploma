import './Favourites.scss';
import { NavLink } from 'react-router-dom';
import useTypedSelector from '../../hooks/useTypedSelector';
import Favourite from './Favourite/Favourite';

const Favourites = () => {
  const { favourites } = useTypedSelector((state) => state.list);

  return (
    <section className="favourites">
      <div className="center-container">
        <ul className="favourites-list">
          {favourites.map((item) => (
            <Favourite key={item.num} data={item} />
          ))}
        </ul>
      </div>
      <NavLink to="/donate">Помочь</NavLink>
    </section>
  );
};

export default Favourites;
