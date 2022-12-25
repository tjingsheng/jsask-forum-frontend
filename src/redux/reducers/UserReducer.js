import { ActionType, Constant } from "../../constants";

const InitialState = {
  userID: Constant.DEFAULT_USER_ID,
  username: Constant.DEFAULT_USERNAME,
};

const userReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ActionType.GET_USER_BY_ID:
      return {
        ...state,
        username: action.payload.username,
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
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
