import { ActionType, Constant } from "../../constants";

const InitialState = {
  userId: Constant.DEFAULT_USER_ID,
  username: Constant.DEFAULT_USERNAME,
};

const userReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ActionType.SET_USER_ID:
      return {
        ...state,
        userId: action.payload.userId,
      };
    case ActionType.RESET_USER_ID:
      return {
        ...state,
        userId: Constant.DEFAULT_USER_ID,
      };
    case ActionType.GET_USERNAME:
      return {
        ...state,
        username: action.payload.username,
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
