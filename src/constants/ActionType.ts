
interface ActionTypeType {
  // AUTHENTICATION
  RESET_AUTHENTICATION_REDUCER: string;
  
  LOGIN: string;
  LOGIN_SUCCESS: string;
  LOGIN_FAILED: string;
  
  LOGOUT: string;
  LOGOUT_SUCCESS: string;
  LOGOUT_FAILED: string;
  
  CREATE_USER: string;
  CREATE_USER_SUCCESS: string;
  CREATE_USER_FAILED: string;
  
  CHECK_USERNAME: string;
  CHECK_USERNAME_SUCCESS: string;
  CHECK_USERNAME_FAILED: string;
  
  // POST PREFERENCES
  RESET_POST_PREFERENCE_REDUCER: string;
  
  PUT_POST_PREFERENCE: string;
  PUT_POST_PREFERENCE_SUCCESS: string;
  PUT_POST_PREFERENCE_FAILED: string;
  
  // POST
  RESET_POST_REDUCER: string;
  
  FETCH_ALL_POSTS: string;
  FETCH_ALL_POSTS_SUCCESS: string;
  FETCH_ALL_POSTS_FAILED: string;
  
  FETCH_CURR_POST: string;
  FETCH_CURR_POST_SUCCESS: string;
  FETCH_CURR_POST_FAILED: string;
  
  CREATE_NEW_POST: string;
  CREATE_NEW_POST_SUCCESS: string;
  CREATE_NEW_POST_FAILED: string;
  
  DELETE_POST: string;
  DELETE_POST_SUCCESS: string;
  DELETE_POST_FAILED: string;
  
  UPDATE_POST: string;
  UPDATE_POST_SUCCESS: string;
  UPDATE_POST_FAILED: string;
  
  // TAG
  RESET_TAG_REDUCER: string;
  
  FETCH_ALL_TAGS: string;
  FETCH_ALL_TAGS_SUCCESS: string;
  FETCH_ALL_TAGS_FAILED: string;
  }

const ActionType: ActionTypeType = {
  // AUTHENTICATION
  RESET_AUTHENTICATION_REDUCER: "RESET_AUTHENTICATION_REDUCER",

  LOGIN: "LOGIN",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAILED: "LOGIN_FAILED",

  LOGOUT: "LOGOUT",
  LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
  LOGOUT_FAILED: "LOGOUT_FAILED",

  CREATE_USER: "CREATE_USER",
  CREATE_USER_SUCCESS: "CREATE_USER_SUCCESS",
  CREATE_USER_FAILED: "CREATE_USER_FAILED",

  CHECK_USERNAME: "CHECK_USERNAME",
  CHECK_USERNAME_SUCCESS: "CHECK_USERNAME_SUCCESS",
  CHECK_USERNAME_FAILED: "CHECK_USERNAME_FAILED",

  // POST PREFERENCES
  RESET_POST_PREFERENCE_REDUCER: "RESET_POST_PREFERENCE_REDUCER",

  PUT_POST_PREFERENCE: "PUT_POST_PREFERENCE",
  PUT_POST_PREFERENCE_SUCCESS: "PUT_POST_PREFERENCE_SUCCESS",
  PUT_POST_PREFERENCE_FAILED: "PUT_POST_PREFERENCE_FAILED",

  // POST
  RESET_POST_REDUCER: "RESET_POST_REDUCER",

  FETCH_ALL_POSTS: "FETCH_ALL_POSTS",
  FETCH_ALL_POSTS_SUCCESS: "FETCH_ALL_POSTS_SUCCESS",
  FETCH_ALL_POSTS_FAILED: "FETCH_ALL_POSTS_FAILED",

  FETCH_CURR_POST: "FETCH_CURR_POST",
  FETCH_CURR_POST_SUCCESS: "FETCH_CURR_POST_SUCCESS",
  FETCH_CURR_POST_FAILED: "FETCH_CURR_POST_FAILED",

  CREATE_NEW_POST: "CREATE_NEW_POST",
  CREATE_NEW_POST_SUCCESS: "CREATE_NEW_POST_SUCCESS",
  CREATE_NEW_POST_FAILED: "CREATE_NEW_POST_FAILED",

  DELETE_POST: "DELETE_POST",
  DELETE_POST_SUCCESS: "DELETE_POST_SUCCESS",
  DELETE_POST_FAILED: "DELETE_POST_FAILED",

  UPDATE_POST: "UPDATE_POST",
  UPDATE_POST_SUCCESS: "UPDATE_POST_SUCCESS",
  UPDATE_POST_FAILED: "UPDATE_POST_FAILED",

  // TAG
  RESET_TAG_REDUCER: "RESET_TAG_REDUCER",

  FETCH_ALL_TAGS: "FETCH_ALL_TAGS",
  FETCH_ALL_TAGS_SUCCESS: "FETCH_ALL_TAGS_SUCCESS",
  FETCH_ALL_TAGS_FAILED: "FETCH_ALL_TAGS_FAILED",
};

export default ActionType;