import { combineReducers } from 'redux';
import cardsReducer from './cardsReducer';

const rootReducer = combineReducers({
  list: cardsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
