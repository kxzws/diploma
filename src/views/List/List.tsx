import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useEffect, useState } from 'react';

import { fetchAllPreserves } from '../../utils/serverAPI';
import useAppDispatch from '../../hooks/useAppDispatch';
import useTypedSelector from '../../hooks/useTypedSelector';
import { cardsSlice } from '../../store/Cards/slices';
import { getBirdCards } from '../../store/Cards/thunks';
import { sortingType } from '../../store/Cards/types';
import { preserveCard } from '../../types/common';
import SearchBar from '../../components/SearchBar/SearchBar';
import Loading from '../../components/Loading/Loading';
import Item from './Item/Item';
import SortBtn from './SortBtn/SortBtn';
import './List.scss';

const List = () => {
  const { isLoading, isError, cards, favourites, search, preserveNum, sortType } = useTypedSelector(
    (state) => state.cards
  );

  const { changePreserve, clearFavourites } = cardsSlice.actions;
  const dispatch = useAppDispatch();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [preserves, setPreserves] = useState<preserveCard[]>([]);
  const [preserveNumValue, setPreserveNumValue] = useState<string>(preserveNum.toString());

  useEffect(() => {
    const getPreserves = async () => {
      const response = await fetchAllPreserves();
      if (response === 'error') {
        console.log('error');
      } else {
        const preservesArr = response as preserveCard[];
        setPreserves(preservesArr);
      }
    };
    getPreserves();
  }, []);

  useEffect(() => {
    dispatch(
      getBirdCards({ searchInp: search, preserveNumSel: preserveNum, sortTypeInp: sortType })
    );
  }, [search, preserveNum, sortType, dispatch]);

  const onDefaultPreserveSelectChange = (e: SelectChangeEvent) => {
    e.preventDefault();
    const { value } = e.target;

    setPreserveNumValue(value);
    dispatch(clearFavourites());
    dispatch(changePreserve(Number(value)));
  };

  const onPreserveSelectChange = (e: SelectChangeEvent) => {
    e.preventDefault();
    const { value } = e.target;

    setIsModalOpen(true);
    setPreserveNumValue(value);
  };

  const onAgreedModalClick = () => {
    dispatch(clearFavourites());
    dispatch(changePreserve(Number(preserveNumValue)));
    setIsModalOpen(false);
  };

  const closeModal = () => {
    setPreserveNumValue(preserveNum.toString());
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="list">
        <div className="center-container">
          <FormControl
            variant="outlined"
            sx={{ mb: 2.5, mx: 'auto', minWidth: 120, maxWidth: '30%' }}
          >
            <InputLabel id="preserve-select">Заповедник</InputLabel>
            <Select
              id="preserve-select"
              labelId="preserve-select"
              label="Заповедник"
              value={preserves.length > 0 ? preserveNumValue : ''}
              onChange={
                favourites.length > 0 ? onPreserveSelectChange : onDefaultPreserveSelectChange
              }
            >
              {!!preserves.length &&
                preserves.map((preserve) => (
                  <MenuItem key={preserve.num} value={preserve.num.toString()}>
                    {preserve.presName}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>

          <SearchBar />

          <div className="btns-container">
            <SortBtn
              className={`${sortType === sortingType.ASC ? 'btn-active' : null}`}
              type={sortingType.ASC}
            />
            <SortBtn
              className={`${sortType === sortingType.DESC ? 'btn-active' : null}`}
              type={sortingType.DESC}
            />
          </div>

          {isLoading && <Loading />}
          {isError && <p className="list-warning">Упс! Какая-то ошибка</p>}
          {!isLoading && !isError && cards.length < 1 && (
            <p className="list-warning">Результаты не найдены</p>
          )}

          <div className="items-container">
            {!isLoading && cards.map((item) => <Item key={item.num} data={item} />)}
          </div>
        </div>
      </section>

      <Dialog
        open={isModalOpen}
        onClose={closeModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Сбросить выбор</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Выбор другого заповедника очистит список избранных видов, вы согласны?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button className="list-btn btn_ok" onClick={onAgreedModalClick}>
            ОК
          </button>
          <button className="list-btn btn_cancel" onClick={closeModal}>
            Отмена
          </button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default List;
