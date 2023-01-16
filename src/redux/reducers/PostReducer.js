import { ActionType, Constant } from "../../constants";

const InitialState = {
  allPosts: Constant.DEFAULT_ALL_POSTS,
  isAllPostsFetched: true,

  currPostKeys: Constant.DEFAULT_CURR_POST_KEYS,

  currPost: Constant.DEFAULT_CURR_POST,
  isCurrPostFetched: true,

  newPost: Constant.DEFAULT_NEW_POST,
  isNewPostPosted: true,
  isPostDeleted: true,
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
        isAllPostsFetched: false,
      };
    case ActionType.FETCH_ALL_POSTS_SUCCESS:
      return {
        ...state,
        isAllPostsFetched: true,
        allPosts: action.payload.allPosts,
      };
    case ActionType.FETCH_ALL_POSTS_FAILED:
      return {
        ...state,
        isAllPostsFetched: false,
      };

    case ActionType.FETCH_CURR_POST:
      return {
        ...state,
        currPostKeys: action.payload.currPostKeys,
        isCurrPostFetched: false,
      };
    case ActionType.FETCH_CURR_POST_SUCCESS:
      return {
        ...state,
        currPost: action.payload.currPost,
        isCurrPostFetched: true,
      };
    case ActionType.FETCH_CURR_POST_FAILED:
      return {
        ...state,
        isCurrPostFetched: false,
      };

    case ActionType.CREATE_NEW_POST:
      return {
        ...state,
        newPost: action.payload.newPost,
        isNewPostPosted: false,
      };
    case ActionType.CREATE_NEW_POST_SUCCESS:
      return {
        ...state,
        isNewPostPosted: true,
      };
    case ActionType.CREATE_NEW_POST_FAILED:
      return {
        ...state,
        isNewPostPosted: false,
      };

    case ActionType.DELETE_POST:
      return {
        ...state,
        isPostDeleted: false,
      };
    case ActionType.DELETE_POST_SUCCESS:
      return {
        ...state,
        isPostDeleted: true,
      };
    case ActionType.DELETE_POST_FAILED:
      return {
        ...state,
        isPostDeleted: false,
      };

    default:
      return {
        ...state,
      };
  }
};

export default postReducer;
