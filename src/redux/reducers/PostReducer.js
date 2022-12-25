import { ActionType, Constant } from "../../constants";

const InitialState = {
  allPosts: Constant.DEFAULT_ALL_POSTS,
  error: Constant.DEFAULT_ERROR,

  isAllPostFetched: false,
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
        isAllPostFetched: true,
      };
    case ActionType.FETCH_ALL_POSTS_FAILED:
      return {
        ...state,
        isAllPostFetched: false,
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
    default:
      return {
        ...state,
      };
  }
};

export default postReducer;
