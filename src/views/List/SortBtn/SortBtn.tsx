import './SortBtn.scss';
import useActions from '../../../hooks/useActions';
import { ISortBtnProps } from '../../../types/interfaces';
import { sortingType } from '../../../store/types/cards';

const SortBtn = (props: ISortBtnProps) => {
  const { className, type } = props;
  const { changeSortType } = useActions();

  const updateSort = async () => {
    changeSortType(type);
  };

  return (
    <button type="button" className={`sort-btn ${className}`} onClick={() => updateSort()}>
      {type}
    </button>
  );
};

export default SortBtn;
