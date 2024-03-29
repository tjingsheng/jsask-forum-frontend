import { ActionType } from "../../constants";

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
    payload: { allPosts: data },
  }),
  fetchAllPostsFailed: (data) => ({
    type: ActionType.FETCH_ALL_POSTS_FAILED,
    payload: {
      error: data,
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
    payload: { currPost: data },
  }),
  fetchCurrPostFailed: (data) => ({
    type: ActionType.FETCH_CURR_POST_FAILED,
    payload: {
      error: data,
    },
  }),

  createNewPost: (data) => ({
    type: ActionType.CREATE_NEW_POST,
    payload: {
      newPost: data,
    },
  }),
  createNewPostSuccess: (data) => ({
    type: ActionType.CREATE_NEW_POST_SUCCESS,
    payload: {},
  }),
  createNewPostFailed: (data) => ({
    type: ActionType.CREATE_NEW_POST_FAILED,
    payload: {},
  }),

  deletePost: (data) => ({
    type: ActionType.DELETE_POST,
    payload: {
      deletePostId: data,
    },
  }),
  deletePostSuccess: (data) => ({
    type: ActionType.DELETE_POST_SUCCESS,
    payload: {},
  }),
  deletePostFailed: (data) => ({
    type: ActionType.DELETE_POST_FAILED,
    payload: {},
  }),

  updatePost: (data) => ({
    type: ActionType.UPDATE_POST,
    payload: {
      updatePost: data,
    },
  }),
  updatePostSuccess: (data) => ({
    type: ActionType.UPDATE_POST_SUCCESS,
    payload: {},
  }),
  updatePostFailed: (data) => ({
    type: ActionType.UPDATE_POST_FAILED,
    payload: {},
  }),
};

export default postAction;
