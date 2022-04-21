import './Header.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="center-container">
        <NavLink
          data-testid="main-link"
          to="/"
          className={({ isActive }) => (isActive ? 'active-link' : '')}
        >
          Главная
        </NavLink>
        <NavLink
          data-testid="forms-link"
          to="/list"
          className={({ isActive }) => (isActive ? 'active-link' : '')}
        >
          Помочь
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
