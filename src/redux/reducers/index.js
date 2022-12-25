import authenticationReducer from "./AuthenticationReducer";
import postReducer from "./PostReducer";
import userReducer from "./UserReducer";

const rootReducer = {
  authentication: authenticationReducer,
  user: userReducer,
  post: postReducer,
};

export default rootReducer;
