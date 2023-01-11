import { ActionType, Constant, ErrorType } from "../../constants";

const InitialState = {
  allPosts: Constant.DEFAULT_ALL_POSTS,
  currPostKeys: Constant.DEFAULT_CURR_POST_KEYS,
  currPost: Constant.DEFAULT_CURR_POST,
  error: ErrorType.NO_ERROR,

  isAllPostsFetched: false,
  isCurrPostFetched: false,
};

const postReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ActionType.RESET_POST_REDUCER:
      return {
        ...InitialState,
      };

    case ActionType.FETCH_ALL_POSTS:
      return {
        ...state,
      };
    case ActionType.FETCH_ALL_POSTS_SUCCESS:
      return {
        ...state,
        isAllPostsFetched: true,
      };
    case ActionType.FETCH_ALL_POSTS_FAILED:
      return {
        ...state,
        isAllPostsFetched: false,
      };
    case ActionType.SET_ALL_POSTS:
      return {
        ...state,
        allPosts: action.payload.allPosts,
      };
    case ActionType.RESET_ALL_POSTS:
      return {
        ...state,
        allPosts: Constant.DEFAULT_ALL_POSTS,
      };

    case ActionType.FETCH_CURR_POST:
      return {
        ...state,
        currPostKeys: action.payload.currPostKeys,
      };
    case ActionType.FETCH_CURR_POST_SUCCESS:
      return {
        ...state,
        isCurrPostFetched: true,
      };
    case ActionType.FETCH_CURR_POST_FAILED:
      return {
        ...state,
        isCurrPostFetched: false,
      };
    case ActionType.SET_CURR_POST:
      return {
        ...state,
        currPost: action.payload.currPost,
      };
    case ActionType.RESET_CURR_POST:
      return {
        ...state,
        currPost: Constant.DEFAULT_CURR_POST,
      };

    default:
      return {
        ...state,
      };
  }
};

export default postReducer;
