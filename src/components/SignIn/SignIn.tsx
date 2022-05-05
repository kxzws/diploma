import './SignIn.scss';
import { NavLink } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ILoginFormData } from '../../types/interfaces';
import useTypedSelector from '../../hooks/useTypedSelector';
import useActions from '../../hooks/useActions';

const SignIn = () => {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm<ILoginFormData>();
  // const { } = useTypedSelector((state) => state.auth);
  // const { } = useActions();

  const onSubmit: SubmitHandler<ILoginFormData> = (data) => {
    const login = Number(getValues('login'));
    const password = Number(getValues('password'));

    reset();
  };

  return (
    <section className="login-form">
      <div className="center-container">
        <form action="#" className="form" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="form-title">Авторизация</h2>
          <input
            className={`form-input input-text ${errors.login ? 'input-error' : null}`}
            placeholder="Логин"
            {...register('login', { required: true, minLength: 3 })}
          />
          <p className={`form-error ${errors.login ? null : 'none'}`}>
            *Обязательное поле из минимум трёх символов
          </p>

          <input
            type="password"
            className={`form-input input-text input-card ${errors.password ? 'input-error' : null}`}
            placeholder="Пароль"
            {...register('password', { required: true, minLength: 8 })}
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
