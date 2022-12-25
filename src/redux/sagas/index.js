import { all } from "redux-saga/effects";
import postSaga from "./PostSaga";
import tagSaga from "./TagSaga";
import userSaga from "./UserSaga";

function* rootSaga() {
  yield all([userSaga(), postSaga(), tagSaga()]);
}

export default rootSaga;
