import { ActionType } from "../../constants";

const InitialState = {
  isLoading: false,
};

const appReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ActionType.RESET_APP_REDUCER:
      return {
        ...InitialState,
      };
    case ActionType.SET_IS_LOADING:
      return {
        ...InitialState,
        isLoading: true,
      };
    case ActionType.SET_IS_NOT_LOADING:
      return {
        ...InitialState,
        isLoading: false,
      };

    default:
      return {
        ...state,
      };
  }
};

export default appReducer;
