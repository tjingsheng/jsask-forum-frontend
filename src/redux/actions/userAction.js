import { ActionType } from "../../constants";

const userAction = {
  setUserId: (data) => ({
    type: ActionType.SET_USER_ID,
    payload: {
      userId: data,
    },
  }),
  resetUserId: (data) => ({
    type: ActionType.RESET_USER_ID,
    payload: {
      userId: -1,
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
