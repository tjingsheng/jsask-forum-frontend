import { ActionType } from "../../constants";

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
    payload: { allTags: data },
  }),
  fetchAllTagsFailed: (data) => ({
    type: ActionType.FETCH_ALL_POSTS_FAILED,
    payload: {
      error: data,
    },
  }),
};

export default tagAction;
