import './List.scss';
import { useEffect } from 'react';
import useTypedSelector from '../../hooks/useTypedSelector';
import useActions from '../../hooks/useActions';
import SearchBar from '../../components/SearchBar/SearchBar';
import SortBtn from './SortBtn/SortBtn';
import Item from './Item/Item';
import Loading from '../../components/Loading/Loading';
import { sortingType } from '../../store/types/cards';

const List = () => {
  const { isLoading, isError, cards, search, sortType } = useTypedSelector((state) => state.list);
  const { fetchCards } = useActions();

  useEffect(() => {
    fetchCards(search, sortType);
  }, [search, sortType]);

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
