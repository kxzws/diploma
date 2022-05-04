interface authState {
  nickname: string | null;
  isAdmin: boolean;
  isAuthorized: boolean;
}

// eslint-disable-next-line no-shadow
export enum authActionType {
  LOGIN_USER = 'loginUser',
  LOGOUT_USER = 'logoutUser',
  LOGIN_ADMIN = 'loginAdmin',
  LOGOUT_ADMIN = 'logoutAdmin',
}

interface loginUserAction {
  type: authActionType.LOGIN_USER;
  payload: string;
}

interface logoutUserAction {
  type: authActionType.LOGOUT_USER;
}

interface loginAdminAction {
  type: authActionType.LOGIN_ADMIN;
  payload: string;
}

interface logoutAdminAction {
  type: authActionType.LOGOUT_ADMIN;
}

type authAction = loginUserAction | logoutUserAction | loginAdminAction | logoutAdminAction;

export type { authAction, authState };
