import { ActionType } from "../../constants";

const authenticationAction = {
  resetAuthenticationReducer: (data) => ({
    type: ActionType.RESET_AUTHENTICATION_REDUCER,
    payload: {},
  }),

  setIsLoading: (data) => ({
    type: ActionType.SET_IS_LOADING,
    payload: {},
  }),
  setIsNotLoading: (data) => ({
    type: ActionType.SET_IS_NOT_LOADING,
    payload: {},
  }),
};

export default authenticationAction;
