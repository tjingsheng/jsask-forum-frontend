import { ActionType } from "../../constants";

const authenticationAction = {
  login: () => ({
    type: ActionType.LOGIN,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
};

export default authenticationAction;
