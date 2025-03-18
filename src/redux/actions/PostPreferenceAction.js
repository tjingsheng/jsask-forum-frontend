import { ActionType } from "../../constants";

const postPreferenceAction = {
  resetPostPreferenceReducer: (data) => ({
    type: ActionType.RESET_POST_PREFERENCE_REDUCER,
    payload: {},
  }),

  putPostPreference: (data) => ({
    type: ActionType.PUT_POST_PREFERENCE,
    payload: {
      currUserId: data.currUserId,
      currPostId: data.currPostId,
      currPreference: data.currPreference,
    },
  }),
  putPostPreferenceSuccess: (data) => ({
    type: ActionType.PUT_POST_PREFERENCE_SUCCESS,
    payload: {
      isPutPostPreferenceSuccess: true,
    },
  }),
  putPostPreferenceFailed: (data) => ({
    type: ActionType.PUT_POST_PREFERENCE_FAILED,
    payload: {
      isPutPostPreferenceSuccess: false,
    },
  }),
};

export default postPreferenceAction;
