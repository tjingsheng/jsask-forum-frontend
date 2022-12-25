import { all } from "redux-saga/effects";
import postSaga from "./PostSaga";
import userSaga from "./UserSaga";

function* rootSaga() {
  yield all([userSaga(), postSaga()]);
}

export default rootSaga;
