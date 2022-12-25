import { ActionType } from "../../constants";

const InitialState = {
  isAuthenticated: false,
};

const authenticationReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ActionType.LOGIN:
      return {
        ...state,
        isAuthenticated: true,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default authenticationReducer;
