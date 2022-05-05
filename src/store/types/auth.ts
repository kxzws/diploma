interface authState {
  nickname: string | null;
  isAdmin: boolean;
  isAuthorized: boolean;
}

// eslint-disable-next-line no-shadow
export enum authActionType {
  LOGIN_USER = 'loginUser',
  LOGIN_ADMIN = 'loginAdmin',
  LOGOUT = 'logout',
}

interface loginUserAction {
  type: authActionType.LOGIN_USER;
  payload: string;
}

interface loginAdminAction {
  type: authActionType.LOGIN_ADMIN;
  payload: string;
}

interface logoutAction {
  type: authActionType.LOGOUT;
}

type authAction = loginUserAction | loginAdminAction | logoutAction;

export type { authAction, authState };
