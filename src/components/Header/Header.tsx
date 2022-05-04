import './Header.scss';
import { NavLink } from 'react-router-dom';
import useTypedSelector from '../../hooks/useTypedSelector';
import birdImg from '../../assets/svg/bird.svg';

const Header = () => {
  const { favourites } = useTypedSelector((state) => state.list);

  return (
    <header className="header">
      <div className="center-container">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          <img className="header-logo" src={birdImg} alt="logo: bird" />
        </NavLink>
        <NavLink to="/list" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          Помочь
        </NavLink>
        <div />
        <NavLink
          to="/favourites"
          className={({ isActive }) => (isActive ? 'favs active-link' : 'favs')}
        >
          Избранное ({favourites.length})
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
