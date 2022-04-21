import './List.scss';
import { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import SortBtn from './SortBtn/SortBtn';
import Item from './Item/Item';
import { birdCard } from '../../types/common';
import data from '../../assets/data';

const List = () => {
  const [search, setSearch] = useState<string>();
  const [sortType, setSortType] = useState<'ASC' | 'DESC'>('ASC');
  const [cards, setCards] = useState<birdCard[]>(data);

  const updateSearch = (input: string) => {
    setSearch(input);
  };

  const updateSort = (type: 'ASC' | 'DESC') => {
    setSortType(type);
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

        <div className="items-container">
          {cards.map((item) => (
            <Item key={item.num} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default List;
