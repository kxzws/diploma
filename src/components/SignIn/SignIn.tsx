import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';

import { ILoginFormData } from '../../types/interfaces';
import useAppDispatch from '../../hooks/useAppDispatch';
import useTypedSelector from '../../hooks/useTypedSelector';
import { getLoginData } from '../../store/Auth/thunks';
import StyledButton from '../StyledButton/StyledButton';
import Loading from '../Loading/Loading';
import './SignIn.scss';

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormData>();
  const { isLoading, isError, isAuthorized } = useTypedSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  const [isFailedLogin, setIsFailedLogin] = useState<boolean>(false);

  const onSubmit: SubmitHandler<ILoginFormData> = (data) => {
    const { login: nick, password: pass } = data;

    dispatch(getLoginData({ nick, pass })).then(() => {
      if (isError && !isAuthorized) {
        setIsFailedLogin(true);
      }
    });
  };

  return (
    <section className="login-form">
      <div className="center-container">
        <form action="#" className="form" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="form-title">Авторизация</h2>
          {(isError || isFailedLogin) && <p className="auth-incomplete">Вы не вошли</p>}

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

          {isLoading ? (
            <Loading />
          ) : (
            <StyledButton type="button" buttonType="submit" text="Войти" onClick={() => {}} />
          )}
        </form>
      </div>
    </section>
  );
};

export default SignIn;
