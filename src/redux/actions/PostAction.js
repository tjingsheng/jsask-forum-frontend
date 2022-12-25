import { ActionType, Constant } from "../../constants";

const postAction = {
  resetPostReducer: (data) => ({
    type: ActionType.RESET_POST_REDUCER,
    payload: {},
  }),

  fetchAllPosts: (data) => ({
    type: ActionType.FETCH_ALL_POSTS,
    payload: {
      allPosts: data,
    },
  }),
  fetchAllPostSuccess: (data) => ({
    type: ActionType.FETCH_ALL_POSTS_SUCCESS,
    payload: {},
  }),
  fetchAllPostFailed: (data) => ({
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
      AllPosts: Constant.DEFAULT_ALL_POSTS,
    },
  }),
};

export default postAction;
