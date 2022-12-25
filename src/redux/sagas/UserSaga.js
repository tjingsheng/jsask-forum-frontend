import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";
import { ActionType } from "../../constants";
import { userAction } from "../actions";

function* getCurrUser() {
  const data = yield axios.get("http://localhost:8000/curruser");

  console.log(data);

  yield put(userAction.setUserID(12));
}

function* userSaga() {
  yield takeEvery(ActionType.GET_USER_BY_ID, getCurrUser);
}

export default userSaga;
