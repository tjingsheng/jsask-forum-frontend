import { ActionType, Constant } from "../../constants";

const InitialState = {
  allPosts: Constant.DEFAULT_ALL_POSTS,
  allComments: Constant.DEFAULT_ALL_COMMENTS,
  error: Constant.DEFAULT_ERROR,

  isAllPostsFetched: false,
  isAllCommentsFetched: false,
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

    case ActionType.FETCH_ALL_COMMENTS:
      return {
        ...state,
      };
    case ActionType.FETCH_ALL_COMMENTS_SUCCESS:
      return {
        ...state,
        isAllCommentsFetched: true,
      };
    case ActionType.FETCH_ALL_COMMENTS_FAILED:
      return {
        ...state,
        isAllCommentsFetched: false,
      };
    case ActionType.SET_ALL_COMMENTS:
      return {
        ...state,
        allComments: action.payload.allComments,
      };
    case ActionType.RESET_ALL_COMMENTS:
      return {
        ...state,
        allComments: Constant.DEFAULT_ALL_COMMENTS,
      };

    default:
      return {
        ...state,
      };
  }
};

export default postReducer;
