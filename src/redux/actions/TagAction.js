import { ActionType, Constant } from "../../constants";

const tagAction = {
  resetTagReducer: (data) => ({
    type: ActionType.RESET_TAG_REDUCER,
    payload: {},
  }),

  fetchAllTags: (data) => ({
    type: ActionType.FETCH_ALL_TAGS,
    payload: {
      allTags: data,
    },
  }),
  fetchAllTagsSuccess: (data) => ({
    type: ActionType.FETCH_ALL_TAGS_SUCCESS,
    payload: {},
  }),
  fetchAllTagsFailed: (data) => ({
    type: ActionType.FETCH_ALL_POSTS_FAILED,
    payload: {
      error: data,
    },
  }),

  setAllTags: (data) => ({
    type: ActionType.SET_ALL_TAGS,
    payload: {
      allTags: data,
    },
  }),
  resetAllTags: (data) => ({
    type: ActionType.RESET_ALL_TAGS,
    payload: {
      AllTags: Constant.DEFAULT_ALL_TAGS,
    },
  }),
};

export default tagAction;
