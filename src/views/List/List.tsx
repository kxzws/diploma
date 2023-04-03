import { useEffect } from 'react';

import useAppDispatch from '../../hooks/useAppDispatch';
import useTypedSelector from '../../hooks/useTypedSelector';
import { getBirdCards } from '../../store/Cards/thunks';
import { sortingType } from '../../store/Cards/types';
import SearchBar from '../../components/SearchBar/SearchBar';
import Loading from '../../components/Loading/Loading';
import Item from './Item/Item';
import SortBtn from './SortBtn/SortBtn';
import './List.scss';

const List = () => {
  const { isLoading, isError, cards, search, sortType } = useTypedSelector((state) => state.cards);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBirdCards({ searchInp: search, sortTypeInp: sortType }));
  }, [search, sortType, dispatch]);

  return (
    <section className="list">
      <div className="center-container">
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
  );
};

export default List;
