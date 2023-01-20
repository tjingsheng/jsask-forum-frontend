import { ActionType, Constant } from "../../constants";

const InitialState = {
  allTags: Constant.DEFAULT_ALL_TAGS,
  isAllTagsFetched: true,
};

const tagReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ActionType.RESET_TAG_REDUCER:
      return {
        ...InitialState,
      };

    case ActionType.FETCH_ALL_TAGS:
      return {
        ...state,
        isAllTagsFetched: false,
      };
    case ActionType.FETCH_ALL_TAGS_SUCCESS:
      return {
        ...state,
        allTags: action.payload.allTags,
        isAllTagsFetched: true,
      };
    case ActionType.FETCH_ALL_TAGS_FAILED:
      return {
        ...state,
        isAllTagsFetched: true,
      };

    default:
      return {
        ...state,
      };
  }
};

export default tagReducer;
