import './SortBtn.scss';
import useActions from '../../../hooks/useActions';
import { ISortBtnProps } from '../../../types/interfaces';

const SortBtn = (props: ISortBtnProps) => {
  const { className, type } = props;
  const { changeSortType } = useActions();

  const updateSort = () => {
    changeSortType(type);
  };

  return (
    <button type="button" className={`sort-btn ${className}`} onClick={() => updateSort()}>
      {type}
    </button>
  );
};

export default SortBtn;
