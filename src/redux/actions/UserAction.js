import { ActionType } from "../../constants";

const userAction = {
  GetUserByID: (data) => ({
    type: ActionType.GET_USER_BY_ID,
    payload: {
      userID: data,
    },
  }),
  setUserID: (data) => ({
    type: ActionType.SET_USER_ID,
    payload: {
      userID: data,
    },
  }),
  resetUserID: (data) => ({
    type: ActionType.RESET_USER_ID,
    payload: {
      userID: -1,
    },
  }),
  setUsername: (data) => ({
    type: ActionType.SET_USERNAME,
    payload: {
      username: data,
    },
  }),
  resetUsername: (data) => ({
    type: ActionType.RESET_USERNAME,
    payload: {
      username: "",
    },
  }),
};

export default userAction;
