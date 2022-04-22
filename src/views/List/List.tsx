import './List.scss';
import { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import SortBtn from './SortBtn/SortBtn';
import Item from './Item/Item';
import { birdCard } from '../../types/common';
import Loading from '../../components/Loading/Loading';
import { getAllBirds } from '../../utils/preserves3k6sAPI';

const List = () => {
  const [search, setSearch] = useState<string>('');
  const [sortType, setSortType] = useState<'ASC' | 'DESC'>('ASC');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [cards, setCards] = useState<birdCard[]>([]);

  const setAllBirds = async (input: string, type: 'ASC' | 'DESC') => {
    const birds = await getAllBirds(input, type);
    if (birds === 'error' || (birds as birdCard[])[0].num === undefined) {
      setIsLoading(false);
      setIsError(true);
      setCards([]);
    } else {
      setIsLoading(false);
      setCards(birds as birdCard[]);
    }
  };

  useEffect(() => {
    setAllBirds(search, sortType);
  }, []);

  const updateSearch = async (input: string) => {
    setSearch(input);
    setIsLoading(true);
    setAllBirds(input, sortType);
  };

  const updateSort = async (type: 'ASC' | 'DESC') => {
    setSortType(type);
    setIsLoading(true);
    setAllBirds(search, type);
  };

  return (
    <section className="list">
      <div className="center-container">
        <SearchBar updateSearch={updateSearch} />

        <div className="btns-container">
          <SortBtn
            className={`${sortType === 'ASC' ? 'btn-active' : null}`}
            type="ASC"
            updateSort={updateSort}
          />
          <SortBtn
            className={`${sortType === 'DESC' ? 'btn-active' : null}`}
            type="DESC"
            updateSort={updateSort}
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
