import authenticationReducer from "./authenticationReducer";
import userReducer from "./userReducer";

const rootReducer = {
  authentication: authenticationReducer,
  user: userReducer,
};

export default rootReducer;
