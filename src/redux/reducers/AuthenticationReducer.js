import { ActionType, Constant } from "../../constants";

const InitialState = {
  user: Constant.DEFAULT_USER,
  isAuthenticated: false,
  isAuthenticatedSuccess: true,
  isInvalidCredentials: false,
  isCreateUserSuccess: true,
};

const authenticationReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ActionType.RESET_AUTHENTICATION_REDUCER:
      return {
        ...InitialState,
      };

    case ActionType.LOGIN:
      return {
        ...state,
        isAuthenticated: false,
        isAuthenticatedSuccess: false,
        isInvalidCredentials: false,
      };
    case ActionType.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isAuthenticatedSuccess: true,
        user: action.payload.user,
        isInvalidCredentials: false,
      };
    case ActionType.LOGIN_FAILED:
      return {
        ...state,
        isAuthenticated: false,
        isAuthenticatedSuccess: true,
        isInvalidCredentials: true,
      };

    case ActionType.LOGOUT:
      return {
        ...state,
        isAuthenticated: true,
        isAuthenticatedSuccess: false,
      };
    case ActionType.LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        isAuthenticatedSuccess: true,
      };
    case ActionType.LOGOUT_FAILED:
      return {
        ...state,
        isAuthenticated: true,
        isAuthenticatedSuccess: true,
      };

    case ActionType.CREATE_USER:
      return {
        ...state,
        isCreateUserSuccess: false,
      };
    case ActionType.CREATE_USER_SUCCESS:
      return {
        ...state,
        isCreateUserSuccess: true,
      };
    case ActionType.CREATE_USER_FAILED:
      return {
        ...state,
        isCreateUserSuccess: true,
      };

    default:
      return {
        ...state,
      };
  }
};

export default authenticationReducer;
