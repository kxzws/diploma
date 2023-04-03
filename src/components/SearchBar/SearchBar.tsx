import { useState } from 'react';

import useAppDispatch from '../../hooks/useAppDispatch';
import useTypedSelector from '../../hooks/useTypedSelector';
import { cardsSlice } from '../../store/Cards/slices';
import loupe from '../../assets/svg/loupe.svg';
import './SearchBar.scss';

const SearchBar = () => {
  const { search } = useTypedSelector((state) => state.cards);

  const { updateSearch } = cardsSlice.actions;
  const dispatch = useAppDispatch();

  const [input, setInput] = useState<string>(search);

  const onInput = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    const { value } = e.target as HTMLInputElement;
    setInput(value);
    dispatch(updateSearch(value));
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
