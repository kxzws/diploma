import './Item.scss';
import parse from 'html-react-parser';
import { IMAGE_PATH } from '../../../utils/constants';
import { IItemProps } from '../../../types/interfaces';
import AddBtn from './AddBtn/AddBtn';

const Item = (props: IItemProps) => {
  const { data } = props;
  const { num, title, interTitle, protectStatus, abbr, length, weight, wingspan, description } =
    data;

  return (
    <div className="item">
      <img src={`${IMAGE_PATH}${num}.jpg`} alt={title} className="item-img" />
      <div className="item-body">
        <AddBtn cardId={num} />
        <h2 className="item-title">
          {title} <span>(лат. {interTitle})</span>
        </h2>
        <p className="item-desc desc-protect">
          Статус защиты {parse(`<abbr title="${abbr}">${protectStatus}</abbr>`)}
        </p>
        <p className="item-desc">{length ? `Примерная длина туловища ${length} м` : null} </p>
        <p className="item-desc">{weight ? `Средний вес ${weight} г` : null}</p>
        <p className="item-desc">{wingspan ? `Размах крыльев ${wingspan} метра` : null}</p>
        <p className="item-desc">{description}</p>
      </div>
    </div>
  );
};

export default Item;
