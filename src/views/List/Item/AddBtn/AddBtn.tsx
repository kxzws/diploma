import './AddBtn.scss';
import { useState } from 'react';
import useActions from '../../../../hooks/useActions';
import useTypedSelector from '../../../../hooks/useTypedSelector';
import { IAddBtnProps } from '../../../../types/interfaces';

const AddBtn = (props: IAddBtnProps) => {
  const { cardId } = props;
  const { cards, favourites } = useTypedSelector((state) => state.list);
  const [card] = cards.filter((item) => item.num === cardId);
  const { addFavourite, removeFavourite } = useActions();
  const bool = favourites.filter((item) => item.num === cardId).length > 0;
  const [isFavourite, setFavourite] = useState<boolean>(bool);

  const clickAddFavourite = () => {
    setFavourite(true);
    addFavourite(card);
  };

  const clickRemoveFavourite = () => {
    setFavourite(false);
    removeFavourite(card);
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
