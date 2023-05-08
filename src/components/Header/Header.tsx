import { NavLink } from 'react-router-dom';

import useAppDispatch from '../../hooks/useAppDispatch';
import useTypedSelector from '../../hooks/useTypedSelector';
import { authSlice } from '../../store/Auth/slices';
import { cardsSlice } from '../../store/Cards/slices';
import birdImg from '../../assets/svg/bird.svg';
import './Header.scss';

const Header = () => {
  const { favourites } = useTypedSelector((state) => state.cards);
  const { isAuthorized, isAdmin } = useTypedSelector((state) => state.auth);

  const { logout } = authSlice.actions;
  const { clearFavourites } = cardsSlice.actions;
  const dispatch = useAppDispatch();

  const onAnchorClick = () => {
    dispatch(clearFavourites());
    dispatch(logout());
  };

  return (
    <header className="header">
      <div className="center-container">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active-logo-link' : '')}>
          <img className="header-logo" src={birdImg} alt="logo: bird" />
        </NavLink>
        <NavLink to="/list" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          Помочь
        </NavLink>
        {isAuthorized ? (
          <NavLink to="/rating" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            Рейтинг
          </NavLink>
        ) : null}
        {isAuthorized ? (
          <NavLink to="/finance" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            Финансы
          </NavLink>
        ) : null}
        {isAdmin ? (
          <NavLink to="/admin" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            Админка
          </NavLink>
        ) : null}
        <div />
        <NavLink
          to="/favourites"
          className={({ isActive }) => (isActive ? 'favs active-link' : 'favs')}
        >
          Избранное <span>{favourites.length}</span>
        </NavLink>
        {isAuthorized ? (
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'favs active-link' : 'favs')}
            onClick={onAnchorClick}
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
