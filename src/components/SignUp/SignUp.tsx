import './SignUp.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ISignUpFormData } from '../../types/interfaces';
import useTypedSelector from '../../hooks/useTypedSelector';
import useActions from '../../hooks/useActions';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm<ISignUpFormData>();
  // const { } = useTypedSelector((state) => state.auth);
  // const { } = useActions();

  const onSubmit: SubmitHandler<ISignUpFormData> = (data) => {
    const login = Number(getValues('login'));
    const password = Number(getValues('password'));
    const mail = Number(getValues('mail'));
    const phone = Number(getValues('phone'));

    reset();
  };

  return (
    <section className="signup-form">
      <div className="center-container">
        <form action="#" className="form" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="form-title">Регистрация</h2>
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
            className={`form-input input-text ${errors.password ? 'input-error' : null}`}
            placeholder="Пароль"
            {...register('password', { required: true, minLength: 8 })}
          />
          <p className={`form-error ${errors.password ? null : 'none'}`}>
            *Обязательное поле из минимум восьми символов
          </p>

          <input
            type="mail"
            className={`form-input input-mail ${errors.mail ? 'input-error' : null}`}
            placeholder="e-mail"
            {...register('mail', { required: true })}
          />
          <p className={`form-error ${errors.mail ? null : 'none'}`}>*Обязательно</p>

          <input
            type="tel"
            className={`form-input input-phone ${errors.phone ? 'input-error' : null}`}
            placeholder="Телефон"
            {...register('phone', { required: true })}
          />
          <p className={`form-error ${errors.phone ? null : 'none'}`}>*Обязательно</p>

          <button type="submit" className="btn-submit">
            Зарегистрироваться
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
