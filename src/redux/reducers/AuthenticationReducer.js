import { ActionType, Constant, ErrorType } from "../../constants";

const InitialState = {
  error: ErrorType.NO_ERROR,
  user: Constant.DEFAULT_USER,

  isAuthenticated: false,
  isLoginProperly: false,
  isLogoutProperly: true,
};

const authenticationReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ActionType.RESET_AUTHENTICATION_REDUCER:
      return {
        ...InitialState,
      };

    case ActionType.INITUSER:
      return {
        ...state,
        user: action.payload.user,
      };
    case ActionType.INITUSER_SUCCESS:
      return {
        ...state,
      };
    case ActionType.INITUSER_FAILED:
      return {
        ...state,
        error: ErrorType.INIT_USER_ERROR,
      };

    case ActionType.LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        isLogoutProperly: false,
      };
    case ActionType.LOGIN_SUCCESS:
      return {
        ...state,
        isLoginProperly: true,
      };
    case ActionType.LOGIN_FAILED:
      return {
        ...state,
        isLoginProperly: false,
      };

    case ActionType.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        isLoginProperly: false,
      };
    case ActionType.LOGOUT_SUCCESS:
      return {
        ...state,
        isLogoutProperly: true,
      };
    case ActionType.LOGOUT_FAILED:
      return {
        ...state,
        isLogoutProperly: false,
      };

    default:
      return {
        ...state,
      };
  }
};

export default authenticationReducer;
