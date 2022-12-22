import authenticationReducer from "./authenticationReducer";
import likeReducer from "./likeReducer";
import userIdReducer from "./userIdReducer";

const rootReducer = {
  authentication: authenticationReducer,
  userId: userIdReducer,
  like: likeReducer,
};

export default rootReducer;
