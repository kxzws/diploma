import './Main.scss';
import { NavLink } from 'react-router-dom';

const Main = () => {
  return (
    <main className="main">
      <div className="center-container">
        <div className="main-title">
          <p className="main-subtitle">
            Благодаря большой численности популяций и высокому уровню жизнедеятельности птицы
            оказывают значительное влияние на природные процессы.
          </p>
          <p className="main-subtitle">
            Заповедники в свою очередь оберегают их естественную среду обитания, спасают от
            вымирания разнообразие видов, вносят существенный вклад в развитие науки и экологическое
            просвещение населения.
          </p>
          <NavLink to="/list" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            Как помочь?
          </NavLink>
        </div>
      </div>
    </main>
  );
};

export default Main;
