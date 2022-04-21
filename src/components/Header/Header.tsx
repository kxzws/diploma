import './Header.scss';
import { NavLink } from 'react-router-dom';
import birdImg from '../../assets/svg/bird.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="center-container">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          <img className="header-logo" src={birdImg} alt="logo: bird" />
        </NavLink>
        <NavLink to="/list" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          Помочь
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
