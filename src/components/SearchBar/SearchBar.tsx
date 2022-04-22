import './SearchBar.scss';
import { useState } from 'react';
import loupe from '../../assets/svg/loupe.svg';
import { ISearchBarProps } from '../../types/interfaces';

const SearchBar = (props: ISearchBarProps) => {
  const { updateSearch } = props;
  const [input, setInput] = useState<string>('');

  const onInput = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    const { value } = e.target as HTMLInputElement;
    setInput(value);
    updateSearch(value);
  };

  return (
    <div className="search-form">
      <img src={loupe} alt="icon: loupe" className="search-img" />
      <input
        type="search"
        value={input}
        placeholder="Поиск"
        onInput={(e) => onInput(e)}
        className="search-bar"
      />
    </div>
  );
};

export default SearchBar;
