import { ActionType, Constant } from "../../constants";

const InitialState = {
  userID: Constant.DEFAULT_USER_ID,
  username: Constant.DEFAULT_USERNAME,
  userDatetime: Constant.DEFAULT_DATETIME,
  error: Constant.DEFAULT_ERROR,

  isUserInit: false,
};

const userReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ActionType.RESET_USER_REDUCER:
      return {
        ...InitialState,
      };

    case ActionType.INIT_USER_BY_USERNAME:
      return {
        ...state,
        username: action.payload.username,
      };
    case ActionType.INIT_USER_BY_USERNAME_SUCCESS:
      return {
        ...state,
        isUserInit: true,
      };
    case ActionType.INIT_USER_BY_USERNAME_FAILED:
      return {
        ...state,
        isUserInit: false,
      };

    case ActionType.SET_USER_ID:
      return {
        ...state,
        userID: action.payload.userID,
      };
    case ActionType.RESET_USER_ID:
      return {
        ...state,
        userID: Constant.DEFAULT_USER_ID,
      };

    case ActionType.SET_USERNAME:
      return {
        ...state,
        username: action.payload.username,
      };
    case ActionType.RESET_USERNAME:
      return {
        ...state,
        username: Constant.DEFAULT_USERNAME,
      };

    case ActionType.SET_USER_DATETIME:
      return {
        ...state,
        userDatetime: action.payload.userDatetime,
      };
    case ActionType.RESET_USER_DATETIME:
      return {
        ...state,
        userDatetime: Constant.DEFAULT_DATETIME,
      };
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
