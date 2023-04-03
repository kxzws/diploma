import { NavLink, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';

import { ILoginFormData } from '../../types/interfaces';
import useAppDispatch from '../../hooks/useAppDispatch';
import useTypedSelector from '../../hooks/useTypedSelector';
import { getLoginData } from '../../store/Auth/thunks';
import './SignIn.scss';

const SignIn = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm<ILoginFormData>();
  const { isAuthorized } = useTypedSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<ILoginFormData> = (data) => {
    const nick = String(getValues('login'));
    const pass = String(getValues('password'));

    dispatch(getLoginData({ nick, pass }));
    reset();
    navigate('/list');
  };

  return (
    <section className="login-form">
      <div className="center-container">
        <form action="#" className="form" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="form-title">Авторизация</h2>
          {isAuthorized && <p className="auth-complete">Вы вошли</p>}
          {!isAuthorized && <p className="auth-incomplete">Вы не вошли</p>}

          <input
            className={`form-input input-text ${errors.login ? 'input-error' : null}`}
            placeholder="Логин"
            {...register('login', { required: true, minLength: 3, maxLength: 32 })}
          />
          <p className={`form-error ${errors.login ? null : 'none'}`}>
            *Обязательное поле из минимум трёх символов
          </p>

          <input
            type="password"
            className={`form-input input-text input-card ${errors.password ? 'input-error' : null}`}
            placeholder="Пароль"
            {...register('password', { required: true, minLength: 4, maxLength: 20 })}
          />
          <p className={`form-error ${errors.password ? null : 'none'}`}>
            *Обязательное поле из минимум восьми символов
          </p>

          <NavLink to="/register" className="btn-register">
            Регистрация
          </NavLink>
          <button type="submit" className="btn-submit">
            Войти
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
