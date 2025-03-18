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
      password: data.password,
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

  createUser: (data) => ({
    type: ActionType.CREATE_USER,
    payload: {
      newUser: data,
    },
  }),
  createUserSuccess: (data) => ({
    type: ActionType.CREATE_USER_SUCCESS,
    payload: {},
  }),
  createUserFailed: (data) => ({
    type: ActionType.CREATE_USER_FAILED,
    payload: {},
  }),

  checkUsername: (data) => ({
    type: ActionType.CHECK_USERNAME,
    payload: {
      username: data,
    },
  }),
  checkUsernameSuccess: (data) => ({
    type: ActionType.CHECK_USERNAME_SUCCESS,
    payload: {
      data,
    },
  }),
  checkUsernameFailed: (data) => ({
    type: ActionType.CHECK_USERNAME_FAILED,
    payload: {},
  }),
};

export default authenticationAction;
