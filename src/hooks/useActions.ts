import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import actionCreator from '../store/action-creators/actionCreator';

const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionCreator, dispatch);
};

export default useActions;
