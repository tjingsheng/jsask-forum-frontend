import authenticationReducer from "./authenticationReducer";
import userIdReducer from "./userIdReducer";

const rootReducer = {
  authentication: authenticationReducer,
  userId: userIdReducer,
};

export default rootReducer;
