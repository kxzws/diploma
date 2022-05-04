import './SearchBar.scss';
import { useState } from 'react';
import useTypedSelector from '../../hooks/useTypedSelector';
import useActions from '../../hooks/useActions';
import loupe from '../../assets/svg/loupe.svg';

const SearchBar = () => {
  const { search } = useTypedSelector((state) => state.list);
  const { updateSearch } = useActions();
  const [input, setInput] = useState<string>(search);

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
