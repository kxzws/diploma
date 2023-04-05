import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './NotFound.scss';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate('/list'), 3000);
  }, []);

  return (
    <section className="not-found">
      <h2>404</h2>
      <p>Страница не найдена</p>
      <p>Вы будете автоматически перенаправлены через 3 секунды</p>
    </section>
  );
};

export default NotFound;
