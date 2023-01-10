import { ActionType, Constant } from "../../constants";

const postAction = {
  resetPostReducer: (data) => ({
    type: ActionType.RESET_POST_REDUCER,
    payload: {},
  }),

  fetchAllPosts: (data) => ({
    type: ActionType.FETCH_ALL_POSTS,
    payload: {
      userID: data,
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

  fetchAllComments: (data) => ({
    type: ActionType.FETCH_ALL_COMMENTS,
    payload: {
      allComments: data,
    },
  }),
  fetchAllCommentsSuccess: (data) => ({
    type: ActionType.FETCH_ALL_COMMENTS_SUCCESS,
    payload: {},
  }),
  fetchAllCommentsFailed: (data) => ({
    type: ActionType.FETCH_ALL_COMMENTS_FAILED,
    payload: {
      error: data,
    },
  }),

  setAllComments: (data) => ({
    type: ActionType.SET_ALL_COMMENTS,
    payload: {
      allComments: data,
    },
  }),
  resetAllComments: (data) => ({
    type: ActionType.RESET_ALL_COMMENTS,
    payload: {
      allComments: Constant.DEFAULT_ALL_POSTS,
    },
  }),
};

export default postAction;
