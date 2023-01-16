import { ActionType } from "../../constants";

const InitialState = {
  isPutPostPreferenceSuccess: true,
};

const postPreferenceReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ActionType.RESET_POST_PREFERENCE_REDUCER:
      return {
        ...InitialState,
      };

    case ActionType.PUT_POST_PREFERENCE:
      return {
        ...state,
        isPutPostPreferenceSuccess: false,
      };
    case ActionType.PUT_POST_PREFERENCE_SUCCESS:
      return {
        ...state,
        isPutPostPreferenceSuccess: true,
      };
    case ActionType.PUT_POST_PREFERENCE_FAILED:
      return {
        ...state,
        isPutPostPreferenceSuccess: false,
      };

    default:
      return {
        ...state,
      };
  }
};

export default postPreferenceReducer;
