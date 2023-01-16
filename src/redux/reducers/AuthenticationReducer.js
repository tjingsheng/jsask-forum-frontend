import { ActionType, Constant } from "../../constants";

const InitialState = {
  user: Constant.DEFAULT_USER,
  isAuthenticated: false,
  isAuthenticatedSuccess: true,
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
      };
    case ActionType.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isAuthenticatedSuccess: true,
        user: action.payload.user,
      };
    case ActionType.LOGIN_FAILED:
      return {
        ...state,
        isAuthenticated: false,
        isAuthenticatedSuccess: false,
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
        isAuthenticatedSuccess: false,
      };

    default:
      return {
        ...state,
      };
  }
};

export default authenticationReducer;
