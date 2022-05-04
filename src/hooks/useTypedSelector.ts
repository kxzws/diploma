import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../store/reducers/reducer';

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useTypedSelector;
