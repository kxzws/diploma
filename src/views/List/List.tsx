import './List.scss';
import { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import data from '../../assets/data';

const List = () => {
  const [search, setSearch] = useState<string>();

  const updateSearch = (input: string) => {
    setSearch(input);
  };

  return (
    <section className="list">
      <div className="center-container">
        <SearchBar updateSearch={updateSearch} />
      </div>
    </section>
  );
};

export default List;
