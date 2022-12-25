import { all } from "redux-saga/effects";
import authenticationSaga from "./AuthenticationSaga";
import postSaga from "./PostSaga";
import tagSaga from "./TagSaga";
import userSaga from "./UserSaga";

function* rootSaga() {
  yield all([userSaga(), postSaga(), tagSaga(), authenticationSaga()]);
}

export default rootSaga;
