const ActionType = {
  // AUTHENTICATION
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",

  // USER
  RESET_USER_REDUCER: "RESET_USER_REDUCER",

  INIT_USER_BY_USERNAME: "INIT_USER_BY_USERNAME",
  INIT_USER_BY_USERNAME_SUCCESS: "INIT_USER_BY_USERNAME_SUCCESS",
  INIT_USER_BY_USERNAME_FAILED: "INIT_USER_BY_USERNAME_FAILED",

  SET_USER_ID: "SET_USER_ID",
  RESET_USER_ID: "RESET_USER_ID",

  SET_USERNAME: "SET_USERNAME",
  RESET_USERNAME: "RESET_USERNAME",

  SET_USER_DATETIME: "SET_USER_DATETIME",
  RESET_USER_DATETIME: "RESET_USER_DATETIME",

  // POST
  RESET_POST_REDUCER: "RESET_POST_REDUCER",

  FETCH_ALL_POSTS: "FETCH_ALL_POSTS",
  FETCH_ALL_POSTS_SUCCESS: "FETCH_ALL_POSTS_SUCCESS",
  FETCH_ALL_POSTS_FAILED: "FETCH_ALL_POSTS_FAILED",

  SET_ALL_POSTS: "SET_ALL_POSTS",
  RESET_ALL_POSTS: "RESET_ALL_POSTS",

  // TAG
  RESET_TAG_REDUCER: "RESET_TAG_REDUCER",

  FETCH_ALL_TAGS: "FETCH_ALL_TAGS",
  FETCH_ALL_TAGS_SUCCESS: "FETCH_ALL_TAGS_SUCCESS",
  FETCH_ALL_TAGS_FAILED: "FETCH_ALL_TAGS_FAILED",

  SET_ALL_TAGS: "SET_ALL_TAGS",
  RESET_ALL_TAGS: "RESET_ALL_TAGS",
};

export default ActionType;
