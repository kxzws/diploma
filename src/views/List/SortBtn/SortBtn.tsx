import { ISortBtnProps } from '../../../types/interfaces';
import useAppDispatch from '../../../hooks/useAppDispatch';
import { cardsSlice } from '../../../store/Cards/slices';
import './SortBtn.scss';

const SortBtn = (props: ISortBtnProps) => {
  const { className, type } = props;

  const { changeSortType } = cardsSlice.actions;
  const dispatch = useAppDispatch();

  const updateSort = () => {
    dispatch(changeSortType(type));
  };

  return (
    <button type="button" className={`sort-btn ${className}`} onClick={() => updateSort()}>
      {type}
    </button>
  );
};

export default SortBtn;
