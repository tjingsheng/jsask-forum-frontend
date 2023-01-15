import { ActionType, Constant } from "../../constants";

const InitialState = {
  currPostId: Constant.DEFAULT_CURR_POST_ID,
  currUserId: Constant.DEFAULT_CURR_USER_ID,
  currPreference: Constant.DEFAULT_CURR_POST_ID,
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
        currPostId: action.payload.currPostId,
        currUserId: action.payload.currUserId,
        currPreference: action.payload.currPreference,
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
