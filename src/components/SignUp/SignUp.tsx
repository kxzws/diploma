import './SignUp.scss';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ISignUpFormData } from '../../types/interfaces';
import useTypedSelector from '../../hooks/useTypedSelector';
import useActions from '../../hooks/useActions';

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm<ISignUpFormData>();
  // const { isAuthorized } = useTypedSelector((state) => state.auth);
  const { fetchRegisterData } = useActions();

  const onSubmit: SubmitHandler<ISignUpFormData> = (data) => {
    const login = String(getValues('login'));
    const password = String(getValues('password'));
    const mail = String(getValues('mail'));
    const phone = String(getValues('phone'));

    fetchRegisterData(login, password, mail, phone);
    reset();
    navigate('/list');
  };

  return (
    <section className="signup-form">
      <div className="center-container">
        <form action="#" className="form" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="form-title">Регистрация</h2>
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
            className={`form-input input-text ${errors.password ? 'input-error' : null}`}
            placeholder="Пароль"
            {...register('password', { required: true, minLength: 4, maxLength: 20 })}
          />
          <p className={`form-error ${errors.password ? null : 'none'}`}>
            *Обязательное поле из минимум восьми символов
          </p>

          <input
            type="mail"
            className={`form-input input-mail ${errors.mail ? 'input-error' : null}`}
            placeholder="e-mail"
            {...register('mail', { required: true, maxLength: 50 })}
          />
          <p className={`form-error ${errors.mail ? null : 'none'}`}>*Обязательно</p>

          <input
            type="tel"
            className={`form-input input-phone ${errors.phone ? 'input-error' : null}`}
            placeholder="Телефон"
            {...register('phone', { required: true, maxLength: 18 })}
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
