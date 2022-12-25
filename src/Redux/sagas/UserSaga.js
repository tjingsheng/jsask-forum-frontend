import { takeEvery } from "redux-saga-effects";
import { ActionType } from "../../constants";

function* getUsername() {
  return "Bobby Lee";
}

function* userSaga() {
  yield takeEvery(ActionType.GET_USERNAME, getUsername);
}

export default userSaga;
