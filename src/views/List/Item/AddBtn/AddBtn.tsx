import { useMemo } from 'react';

import useAppDispatch from '../../../../hooks/useAppDispatch';
import useTypedSelector from '../../../../hooks/useTypedSelector';
import { cardsSlice } from '../../../../store/Cards/slices';
import './AddBtn.scss';

interface IAddBtnProps {
  cardId: number;
}

const AddBtn = ({ cardId }: IAddBtnProps) => {
  const { cards, favourites } = useTypedSelector((state) => state.cards);

  const { addFavourite, removeFavourite } = cardsSlice.actions;
  const dispatch = useAppDispatch();

  const card = cards.find((item) => item.num === cardId);

  const isFavourite = useMemo<boolean>(
    () => favourites.find((item) => item.num === cardId) !== undefined,
    [favourites, cardId]
  );

  const clickAddFavourite = () => {
    if (card) dispatch(addFavourite(card));
  };

  const clickRemoveFavourite = () => {
    if (card) dispatch(removeFavourite(card));
  };

  return isFavourite ? (
    <button type="button" className="add-btn btn-active" onClick={() => clickRemoveFavourite()}>
      –
    </button>
  ) : (
    <button type="button" className="add-btn" onClick={() => clickAddFavourite()}>
      +
    </button>
  );
};

export default AddBtn;
