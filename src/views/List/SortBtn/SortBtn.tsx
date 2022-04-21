import './SortBtn.scss';
import { ISortBtnProps } from '../../../types/interfaces';

const SortBtn = (props: ISortBtnProps) => {
  const { className, type, updateSort } = props;

  return (
    <button type="button" className={`sort-btn ${className}`} onClick={() => updateSort(type)}>
      {type}
    </button>
  );
};

export default SortBtn;
