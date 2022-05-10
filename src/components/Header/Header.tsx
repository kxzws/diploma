import './Header.scss';
import { NavLink } from 'react-router-dom';
import useTypedSelector from '../../hooks/useTypedSelector';
import useActions from '../../hooks/useActions';
import birdImg from '../../assets/svg/bird.svg';

const Header = () => {
  const { favourites } = useTypedSelector((state) => state.list);
  const { isAuthorized, isAdmin } = useTypedSelector((state) => state.auth);
  const { logout } = useActions();

  return (
    <header className="header">
      <div className="center-container">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          <img className="header-logo" src={birdImg} alt="logo: bird" />
        </NavLink>
        <NavLink to="/list" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          Помочь
        </NavLink>
        <NavLink to="/rating" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          Рейтинг
        </NavLink>
        {isAdmin && (
          <NavLink to="/admin" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            Админка
          </NavLink>
        )}
        <div />
        <NavLink
          to="/favourites"
          className={({ isActive }) => (isActive ? 'favs active-link' : 'favs')}
        >
          Избранное ({favourites.length})
        </NavLink>
        {isAuthorized ? (
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'favs active-link' : 'favs')}
            onClick={() => logout()}
          >
            Выйти
          </NavLink>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? 'favs active-link' : 'favs')}
          >
            Войти
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
