import authenticationReducer from "./AuthenticationReducer";
import postReducer from "./PostReducer";
import tagReducer from "./TagReducer";

const rootReducer = {
  authentication: authenticationReducer,
  post: postReducer,
  tag: tagReducer,
};

export default rootReducer;
