import { ActionType } from "../../constants";

const authenticationAction = {
  resetAuthenticationReducer: (data) => ({
    type: ActionType.RESET_AUTHENTICATION_REDUCER,
    payload: {},
  }),

  login: (data) => ({
    type: ActionType.LOGIN,
    payload: {
      username: data.username,
    },
  }),
  loginSuccess: (data) => ({
    type: ActionType.LOGIN_SUCCESS,
    payload: { user: data },
  }),
  loginFailed: (data) => ({
    type: ActionType.LOGIN_FAILED,
    payload: {},
  }),

  logout: (data) => ({
    type: ActionType.LOGOUT,
    payload: {},
  }),
  logoutSuccess: (data) => ({
    type: ActionType.LOGOUT_SUCCESS,
    payload: {},
  }),
  logoutFailed: (data) => ({
    type: ActionType.LOGOUT_FAILED,
    payload: {},
  }),
};

export default authenticationAction;
