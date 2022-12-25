import { ActionType } from "../../constants";

const InitialState = {
  isAuthenticated: false,
  isLoginProperly: false,
  isLogoutProperly: true,
  loginForm: {},
};

const authenticationReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ActionType.LOGIN:
      return {
        ...state,
        isAuthenticated: true,
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
