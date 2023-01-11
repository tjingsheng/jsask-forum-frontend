import { ActionType, Constant } from "../../constants";

const postAction = {
  resetPostReducer: (data) => ({
    type: ActionType.RESET_POST_REDUCER,
    payload: {},
  }),

  fetchAllPosts: (data) => ({
    type: ActionType.FETCH_ALL_POSTS,
    payload: {
      userId: data,
    },
  }),
  fetchAllPostsSuccess: (data) => ({
    type: ActionType.FETCH_ALL_POSTS_SUCCESS,
    payload: {},
  }),
  fetchAllPostsFailed: (data) => ({
    type: ActionType.FETCH_ALL_POSTS_FAILED,
    payload: {
      error: data,
    },
  }),

  setAllPosts: (data) => ({
    type: ActionType.SET_ALL_POSTS,
    payload: {
      allPosts: data,
    },
  }),
  resetAllPosts: (data) => ({
    type: ActionType.RESET_ALL_POSTS,
    payload: {
      allPosts: Constant.DEFAULT_ALL_POSTS,
    },
  }),

  fetchCurrPost: (data) => ({
    type: ActionType.FETCH_CURR_POST,
    payload: {
      currPostKeys: data,
    },
  }),
  fetchCurrPostSuccess: (data) => ({
    type: ActionType.FETCH_CURR_POST_SUCCESS,
    payload: {},
  }),
  fetchCurrPostFailed: (data) => ({
    type: ActionType.FETCH_CURR_POST_FAILED,
    payload: {
      error: data,
    },
  }),
  setCurrPost: (data) => ({
    type: ActionType.SET_CURR_POST,
    payload: {
      currPost: data,
    },
  }),
  resetCurrPost: (data) => ({
    type: ActionType.RESET_CURR_POST,
    payload: {
      currPost: Constant.DEFAULT_CURR_POST,
    },
  }),
};

export default postAction;
