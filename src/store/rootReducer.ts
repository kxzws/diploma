import { combineReducers } from 'redux';
import authReducer from './Auth/slices';
import cardsReducer from './Cards/slices';

const rootReducer = combineReducers({
  auth: authReducer,
  cards: cardsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
