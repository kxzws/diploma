import { combineReducers } from 'redux';
import authReducer from './authReducer';
import cardsReducer from './cardsReducer';

const rootReducer = combineReducers({
  list: cardsReducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
