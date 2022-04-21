import './Item.scss';
import { IItemProps } from '../../../types/interfaces';

const Item = (props: IItemProps) => {
  const { data } = props;
  const { title, interTitle, img, protectStatus, weight, wingspan, description } = data;

  return (
    <div className="item">
      <img src={img} alt={title} className="item-img" />
      <div className="item-body">
        <h2 className="item-title">
          {title} <span>(лат. {interTitle})</span>
        </h2>
        <p className="item-desc desc-protect">
          {protectStatus ? `Статус защиты ${protectStatus}` : null}
        </p>
        <p className="item-desc">{weight ? `Вес ${weight}` : null}</p>
        <p className="item-desc">{wingspan ? `Размах крыльев ${wingspan}` : null}</p>
        <p className="item-desc">{description}</p>
      </div>
    </div>
  );
};

export default Item;
