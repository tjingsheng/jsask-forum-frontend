import { all } from "redux-saga/effects";
import authenticationSaga from "./AuthenticationSaga";
import postSaga from "./PostSaga";
import tagSaga from "./TagSaga";

function* rootSaga() {
  yield all([postSaga(), tagSaga(), authenticationSaga()]);
}

export default rootSaga;
