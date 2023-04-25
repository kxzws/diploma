import useAppDispatch from '../../../hooks/useAppDispatch';
import { cardsSlice } from '../../../store/Cards/slices';
import { sortingType } from '../../../store/Cards/types';
import './SortBtn.scss';

interface ISortBtnProps {
  className: string;
  type: sortingType;
}

const SortBtn = ({ className, type }: ISortBtnProps) => {
  const { changeSortType } = cardsSlice.actions;
  const dispatch = useAppDispatch();

  const updateSort = () => {
    dispatch(changeSortType(type));
  };

  return (
    <button type="button" className={`sort-btn ${className}`} onClick={updateSort}>
      {type}
    </button>
  );
};

export default SortBtn;
