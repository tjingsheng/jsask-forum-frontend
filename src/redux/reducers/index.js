import authenticationReducer from "./AuthenticationReducer";
import postReducer from "./PostReducer";
import tagReducer from "./TagReducer";
import userReducer from "./UserReducer";

const rootReducer = {
  authentication: authenticationReducer,
  user: userReducer,
  post: postReducer,
  tag: tagReducer,
};

export default rootReducer;
