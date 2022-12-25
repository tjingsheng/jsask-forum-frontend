import { put, takeEvery } from "redux-saga/effects";
import { axiosRequest, RequestMethod } from "../../configs/axios";
import URI from "../../configs/Uri";
import { ActionType } from "../../constants";
import { userAction } from "../actions";

function* getCurrUser(action) {
  const response = yield axiosRequest(RequestMethod.get, URI.getCurrUser);

  const currUsername = action.payload.userID;

  const currUserID = response.data.payload.data.userID;
  const currUserDatetime = response.data.payload.data.userDatetime;

  console.log(response);
  console.log(currUsername);
  console.log(currUserID);
  console.log(currUserDatetime);

  yield put(userAction.setUsername(currUsername));
  yield put(userAction.setUserID(currUserID));
  yield put(userAction.setUserDatetime(currUserDatetime));
}

function* userSaga() {
  yield takeEvery(ActionType.INIT_USER_BY_USERNAME, getCurrUser);
}

export default userSaga;
