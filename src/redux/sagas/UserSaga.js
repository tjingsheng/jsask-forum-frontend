import { put, takeEvery } from "redux-saga/effects";
import { axiosRequest, RequestMethod } from "../../configs/axios";
import URI from "../../configs/Uri";
import { ActionType, ErrorType } from "../../constants";
import { userAction } from "../actions";

function* initUserByUsername(action) {
  try {
    // ADD LOGIC TO SPECIFY USERNAME IN AXIOS REQUEST

    const requestURI = URI.getCurrUser + "/" + action.payload.username;
    const response = yield axiosRequest(RequestMethod.get, requestURI);

    const curruser = response.data.payload.data;
    const currUserId = curruser.id;
    const currUsername = curruser.username;
    const currUserDatetime = curruser.userDatetime;
    yield put(userAction.setUsername(currUsername));
    yield put(userAction.setUserID(currUserId));
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
