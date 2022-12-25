import { put, takeEvery } from "redux-saga/effects";
import { axiosRequest, RequestMethod } from "../../configs/axios";
import URI from "../../configs/Uri";
import { ActionType, ErrorType } from "../../constants";
import { userAction } from "../actions";

function* initUserByUsername(action) {
  try {
    // ADD LOGIC TO SPECIFY USERNAME IN AXIOS REQUEST
    const response = yield axiosRequest(RequestMethod.get, URI.getCurrUser);
    const currUsername = action.payload.userID;
    const currUserID = response.data.payload.data.userID;
    const currUserDatetime = response.data.payload.data.userDatetime;
    yield put(userAction.setUsername(currUsername));
    yield put(userAction.setUserID(currUserID));
    yield put(userAction.setUserDatetime(currUserDatetime));
    yield put(userAction.initUserByUsernameSuccess());
  } catch (e) {
    console.log(e);
    yield put(
      userAction.initUserByUsernameFailed(ErrorType.INIT_USER_BY_USERNAME_ERROR)
    );
  }
}

function* userSaga() {
  yield takeEvery(ActionType.INIT_USER_BY_USERNAME, initUserByUsername);
}

export default userSaga;
