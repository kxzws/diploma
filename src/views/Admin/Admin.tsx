import { useCallback, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import {
  deleteBirdSpecies,
  fetchAllGenuses,
  fetchAllPreserves,
  fetchAllStatuses,
  makeBackup,
  postBirdSpecies,
} from '../../utils/serverAPI';
import { genusCard, preserveCard, protectStatusCard } from '../../types/common';
import { IAdminAddFormData, IAdminRemoveFormData } from '../../types/interfaces';
import { cardsSlice } from '../../store/Cards/slices';
import { getBirdCards } from '../../store/Cards/thunks';
import useAppDispatch from '../../hooks/useAppDispatch';
import useTypedSelector from '../../hooks/useTypedSelector';
import StyledButton from '../../components/StyledButton/StyledButton';
import './Admin.scss';

const Admin = () => {
  const addForm = useForm<IAdminAddFormData>();
  const removeForm = useForm<IAdminRemoveFormData>();

  const { cards, favourites, search, preserveNum, sortType } = useTypedSelector(
    (state) => state.cards
  );

  const { changePreserve, removeFavourite, clearFavourites } = cardsSlice.actions;
  const dispatch = useAppDispatch();

  const [isCompleteAdd, setIsCompleteAdd] = useState<boolean>(false);
  const [isCompleteRemove, setIsCompleteRemove] = useState<boolean>(false);
  const [preserveNumValue, setPreserveNumValue] = useState<string>(preserveNum.toString());
  const [statuses, setStatuses] = useState<protectStatusCard[]>([]);
  const [genuses, setGenuses] = useState<genusCard[]>([]);
  const [preserves, setPreserves] = useState<preserveCard[]>([]);

  useEffect(() => {
    const getStatuses = async () => {
      const response = await fetchAllStatuses();
      if (response === 'error') {
        console.log('error');
      } else {
        const statusesArr = response as protectStatusCard[];
        setStatuses(statusesArr);
      }
    };
    const getGenuses = async () => {
      const response = await fetchAllGenuses();
      if (response === 'error') {
        console.log('error');
      } else {
        const genusesArr = response as genusCard[];
        setGenuses(genusesArr);
      }
    };
    const getPreserves = async () => {
      const response = await fetchAllPreserves();
      if (response === 'error') {
        console.log('error');
      } else {
        const preservesArr = response as preserveCard[];
        setPreserves(preservesArr);
      }
    };

    getStatuses();
    getGenuses();
    getPreserves();
  }, []);

  useEffect(() => {
    dispatch(
      getBirdCards({ searchInp: search, preserveNumSel: preserveNum, sortTypeInp: sortType })
    );
  }, [search, preserveNum, sortType, dispatch]);

  const onChangePreserve = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();

    setPreserveNumValue(e.target.value);
    dispatch(changePreserve(Number(e.target.value)));
    dispatch(clearFavourites());
  };

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

  const sendBirdSpecies = async (
    name: string,
    length: number | null,
    weight: number | null,
    wingspan: number | null,
    description: string | null,
    genusId: number,
    protectStatusId: number,
    preserveId: number
  ) => {
    const response = await postBirdSpecies(
      name,
      length,
      weight,
      wingspan,
      description,
      genusId,
      protectStatusId,
      preserveId
    );
    if (response === 'error') {
      console.log('error');
    } else {
      toggleCompleteAdd();
    }
  };

  const removeBirdSpecies = async (speciesId: number) => {
    const response = await deleteBirdSpecies(speciesId);
    if (response === 'error') {
      console.log('error');
    } else {
      const birdCard = favourites.find((fav) => fav.num === speciesId);
      if (birdCard) dispatch(removeFavourite(birdCard));

      toggleCompleteRemove();
    }
  };

  const makeBackupRequest = async () => {
    const response = await makeBackup();
    if (response === 'error') {
      console.log('error');
    } else {
      console.log('backup success');
    }
  };

  const onSubmitAdd: SubmitHandler<IAdminAddFormData> = useCallback(
    (data) => {
      const { name, length, weight, wingspan, description } = data;

      const genusId = Number(addForm.getValues('genus'));
      const protectStatusId = Number(addForm.getValues('protectStatus'));
      const preserveId = Number(preserveNumValue);

      sendBirdSpecies(
        name,
        length,
        weight,
        wingspan,
        description,
        genusId,
        protectStatusId,
        preserveId
      );
      addForm.reset();
    },
    [addForm, preserveNumValue]
  );

  const onSubmitRemove: SubmitHandler<IAdminRemoveFormData> = useCallback(() => {
    const speciesId = Number(removeForm.getValues('species'));

    removeBirdSpecies(speciesId);
    removeForm.reset();
  }, [removeForm]);

  return (
    <section className="admin-form">
      <div className="center-container">
        <StyledButton
          type="button"
          buttonType="button"
          text="Бэкап в json"
          onClick={() => {
            makeBackupRequest();
          }}
        />

        <article className="admin-panel">
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

            <h3 className="form-subtitle">Защитный статус</h3>
            <select
              className={`form-select ${
                addForm.formState.errors.protectStatus ? 'select-error' : null
              }`}
              defaultValue=""
              {...addForm.register('protectStatus', { required: true })}
            >
              <option className="form-option" value="" disabled>
                Не выбрано
              </option>
              {statuses.map((item) => (
                <option key={item.num} className="form-option" value={item.num}>
                  {item.longName}
                </option>
              ))}
            </select>
            <p className={`form-error ${addForm.formState.errors.protectStatus ? null : 'none'}`}>
              *Необходимо выбрать один из защитных статусов
            </p>

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

            <h3 className="form-subtitle">Заповедник</h3>
            <select
              className="form-select"
              value={preserves.length > 0 ? preserveNumValue.toString() : ''}
              onChange={onChangePreserve}
            >
              {!!preserves.length &&
                preserves.map((item) => (
                  <option key={item.num} className="form-option" value={item.num}>
                    {item.presName}
                  </option>
                ))}
            </select>

            <StyledButton type="button" buttonType="submit" text="Добавить" onClick={() => {}} />
          </form>

          <form action="#" className="form" onSubmit={removeForm.handleSubmit(onSubmitRemove)}>
            {isCompleteRemove && <p className="form-complete">Вид удалён</p>}

            <h2 className="form-title">Удалить вид птиц</h2>
            <select
              className={`form-select ${
                removeForm.formState.errors.species ? 'select-error' : null
              }`}
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

            <StyledButton type="button" buttonType="submit" text="Удалить" onClick={() => {}} />
          </form>
        </article>
      </div>
    </section>
  );
};

export default Admin;
