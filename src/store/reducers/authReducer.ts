import { authAction, authState, authActionType } from '../types/auth';

const initialState: authState = {
  nickname: null,
  isAdmin: false,
  isAuthorized: false,
};

const authReducer = (state: authState = initialState, action: authAction): authState => {
  switch (action.type) {
    case authActionType.LOGIN_USER:
      return { ...state, isAuthorized: true, nickname: action.payload };
    case authActionType.LOGIN_ADMIN:
      return { ...state, isAuthorized: false, isAdmin: true, nickname: action.payload };
    case authActionType.LOGOUT:
      return { ...state, isAuthorized: false, isAdmin: false, nickname: null };
    default:
      return state;
  }
};

export default authReducer;
