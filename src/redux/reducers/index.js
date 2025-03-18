import authenticationReducer from "./AuthenticationReducer";
import postPreferenceReducer from "./PostPreferenceReducer";
import postReducer from "./PostReducer";
import tagReducer from "./TagReducer";

const rootReducer = {
  authentication: authenticationReducer,
  postPreference: postPreferenceReducer,
  post: postReducer,
  tag: tagReducer,
};

export default rootReducer;
