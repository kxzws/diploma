import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Loading from '../Loading/Loading';
import './NotFound.scss';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate('/list'), 700);
  }, [navigate]);

  return (
    <section className="not-found">
      <h2>404</h2>
      <p>Страница не найдена</p>
      <p>Вы будете автоматически перенаправлены очень скоро</p>
      <Loading />
    </section>
  );
};

export default NotFound;
