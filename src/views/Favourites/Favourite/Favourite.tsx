import parse from 'html-react-parser';

import { birdCard } from '../../../types/common';
import useAppDispatch from '../../../hooks/useAppDispatch';
import { cardsSlice } from '../../../store/Cards/slices';
import './Favourite.scss';

interface IFavouriteProps {
  data: birdCard;
}

const Favourite = ({ data }: IFavouriteProps) => {
  const { title, interTitle, protectStatus, abbr, description } = data;

  const { removeFavourite } = cardsSlice.actions;
  const dispatch = useAppDispatch();

  const clickRemoveFavourite = () => {
    dispatch(removeFavourite(data));
  };

  return (
    <li className="favourite">
      <h2 className="favourite-title">
        {title} <br />
        <span>(лат. {interTitle})</span>
      </h2>
      <p className="favourite-desc desc-protect">
        Статус защиты {parse(`<abbr title="${abbr}">${protectStatus}</abbr>`)}
      </p>
      <p className="favourite-desc">{description}</p>
      <button type="button" className="favourite-btn" onClick={clickRemoveFavourite}>
        x
      </button>
    </li>
  );
};

export default Favourite;
