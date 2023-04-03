import { useState } from 'react';

import { IAddBtnProps } from '../../../../types/interfaces';
import useAppDispatch from '../../../../hooks/useAppDispatch';
import useTypedSelector from '../../../../hooks/useTypedSelector';
import { cardsSlice } from '../../../../store/Cards/slices';
import './AddBtn.scss';

const AddBtn = (props: IAddBtnProps) => {
  const { cardId } = props;

  const { cards, favourites } = useTypedSelector((state) => state.cards);

  const { addFavourite, removeFavourite } = cardsSlice.actions;
  const dispatch = useAppDispatch();

  const [card] = cards.filter((item) => item.num === cardId);

  const bool = favourites.filter((item) => item.num === cardId).length > 0;
  const [isFavourite, setFavourite] = useState<boolean>(bool);

  const clickAddFavourite = () => {
    setFavourite(true);
    dispatch(addFavourite(card));
  };

  const clickRemoveFavourite = () => {
    setFavourite(false);
    dispatch(removeFavourite(card));
  };

  if (isFavourite) {
    return (
      <button type="button" className="add-btn btn-active" onClick={() => clickRemoveFavourite()}>
        –
      </button>
    );
  }

  return (
    <button type="button" className="add-btn" onClick={() => clickAddFavourite()}>
      +
    </button>
  );
};

export default AddBtn;
