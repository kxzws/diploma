import parse from 'html-react-parser';
import { NavLink } from 'react-router-dom';

import { birdCard } from '../../../types/common';
import AddBtn from './AddBtn/AddBtn';
import './Item.scss';

interface IItemProps {
  data: birdCard;
}

const Item = ({ data }: IItemProps) => {
  const { num, title, interTitle, protectStatus, abbr, length, weight, wingspan, description } =
    data;

  return (
    <div className="item">
      <img src={`${process.env.REACT_APP_IMAGES_URL}${num}.jpg`} alt={title} className="item-img" />
      <div className="item-body">
        <AddBtn cardId={num} />
        <h2 className="item-title">
          {title} <span>(лат. {interTitle})</span>
        </h2>
        <p className="item-desc desc_protect">
          Статус защиты {parse(`<abbr title="${abbr}">${protectStatus}</abbr>`)}
        </p>

        <NavLink className="item-desc desc_link" to={`/list/${num}`}>
          Подробнее...
        </NavLink>
      </div>
    </div>
  );
};

export default Item;
