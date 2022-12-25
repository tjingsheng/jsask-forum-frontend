import { ActionType, Constant } from "../../constants";

const userAction = {
  InitUserByUsername: (data) => ({
    type: ActionType.INIT_USER_BY_USERNAME,
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
      userID: Constant.DEFAULT_USER_ID,
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
      username: Constant.DEFAULT_USERNAME,
    },
  }),
  setUserDatetime: (data) => ({
    type: ActionType.SET_USER_DATETIME,
    payload: {
      userDatetime: data,
    },
  }),
  resetUserDatetime: (data) => ({
    type: ActionType.RESET_USER_DATETIME,
    payload: {
      userDatetime: Constant.DEFAULT_DATETIME,
    },
  }),
};

export default userAction;
