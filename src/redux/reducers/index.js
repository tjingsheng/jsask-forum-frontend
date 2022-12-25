import authenticationReducer from "./AuthenticationReducer";
import userReducer from "./UserReducer";

const rootReducer = {
  authentication: authenticationReducer,
  user: userReducer,
};

export default rootReducer;
