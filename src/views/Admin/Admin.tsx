import './Admin.scss';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IAdminAddFormData, IAdminRemoveFormData } from '../../types/interfaces';
import useTypedSelector from '../../hooks/useTypedSelector';
import useActions from '../../hooks/useActions';
import { getAllgenuses } from '../../utils/preserves3k6sAPI';
import { genusCard } from '../../types/common';

const Admin = () => {
  const addForm = useForm<IAdminAddFormData>();
  const removeForm = useForm<IAdminRemoveFormData>();
  const { cards } = useTypedSelector((state) => state.list);
  const [isCompleteAdd, setIsCompleteAdd] = useState<boolean>(false);
  const [isCompleteRemove, setIsCompleteRemove] = useState<boolean>(false);
  const [genuses, setGenuses] = useState<genusCard[]>([]);

  useEffect(() => {
    const getGenuses = async () => {
      const response = await getAllgenuses();
      if (response === 'error') {
        console.log('error');
      } else {
        const genusesArr = response as genusCard[];
        setGenuses(genusesArr);
      }
    };
    getGenuses();
  }, []);

  const toggleCompleteAdd = () => {
    setIsCompleteAdd(true);
    setTimeout(() => {
      setIsCompleteAdd(false);
    }, 3000);
  };

  const toggleCompleteRemove = () => {
    setIsCompleteRemove(true);
    setTimeout(() => {
      setIsCompleteRemove(false);
    }, 3000);
  };

  const onSubmitAdd: SubmitHandler<IAdminAddFormData> = (data) => {
    const name = String(addForm.getValues('name'));
    const length = Number(addForm.getValues('length'));
    const weight = Number(addForm.getValues('weight'));
    const wingspan = Number(addForm.getValues('wingspan'));
    const description = String(addForm.getValues('description'));
    const genusId = Number(addForm.getValues('genus'));

    addForm.reset();
    toggleCompleteAdd();
  };

  const onSubmitRemove: SubmitHandler<IAdminRemoveFormData> = (data) => {
    const speciesId = Number(removeForm.getValues('species'));

    removeForm.reset();
    toggleCompleteRemove();
  };

  return (
    <section className="admin-form">
      <div className="center-container">
        <button type="button" className="btn-backup">
          Бэкап в json
        </button>

        <form action="#" className="form" onSubmit={addForm.handleSubmit(onSubmitAdd)}>
          {isCompleteAdd && <p className="form-complete">Вид добавлен</p>}
          <h2 className="form-title">Добавить вид птиц</h2>
          <input
            className={`form-input input-text ${
              addForm.formState.errors.name ? 'input-error' : null
            }`}
            placeholder="Название"
            {...addForm.register('name', { required: true, maxLength: 98 })}
          />
          <p className={`form-error ${addForm.formState.errors.name ? null : 'none'}`}>
            *Обязательно
          </p>

          <label htmlFor="length" className="form-label">
            <input
              id="length"
              type="number"
              min="0"
              className="form-input input-number"
              placeholder="Длина"
              {...addForm.register('length')}
            />
            метр(ов)
          </label>

          <label htmlFor="weight" className="form-label">
            <input
              id="weight"
              type="number"
              min="0"
              className="form-input input-number"
              placeholder="Вес"
              {...addForm.register('weight')}
            />
            грамм(ов)
          </label>

          <label htmlFor="wingspan" className="form-label">
            <input
              id="wingspan"
              type="number"
              min="0"
              className="form-input input-number"
              placeholder="Размах крыльев"
              {...addForm.register('wingspan')}
            />
            метр(ов)
          </label>

          <h3 className="form-subtitle">Краткое описание</h3>
          <input
            className="form-input input-text input-descr"
            {...addForm.register('description')}
          />

          <h3 className="form-subtitle">Род</h3>
          <select
            className={`form-select ${addForm.formState.errors.genus ? 'select-error' : null}`}
            defaultValue=""
            {...addForm.register('genus', { required: true })}
          >
            <option className="form-option" value="" disabled>
              Не выбрано
            </option>
            {genuses.map((item) => (
              <option key={item.num} className="form-option" value={item.num}>
                {item.genusName}
              </option>
            ))}
          </select>
          <p className={`form-error ${addForm.formState.errors.genus ? null : 'none'}`}>
            *Необходимо выбрать один из родов
          </p>
          <button type="submit" className="btn-submit">
            Добавить
          </button>
        </form>

        <form action="#" className="form" onSubmit={removeForm.handleSubmit(onSubmitRemove)}>
          {isCompleteRemove && <p className="form-complete">Вид удалён</p>}

          <h2 className="form-title">Удалить вид птиц</h2>
          <select
            className={`form-select ${removeForm.formState.errors.species ? 'select-error' : null}`}
            defaultValue=""
            {...removeForm.register('species', { required: true })}
          >
            <option className="form-option" value="" disabled>
              Не выбрано
            </option>
            {cards.map((item) => (
              <option key={item.num} className="form-option" value={item.num}>
                {item.title}
              </option>
            ))}
          </select>
          <p className={`form-error ${removeForm.formState.errors.species ? null : 'none'}`}>
            *Необходимо выбрать один из видов
          </p>

          <button type="submit" className="btn-submit">
            Удалить
          </button>
        </form>
      </div>
    </section>
  );
};

export default Admin;
