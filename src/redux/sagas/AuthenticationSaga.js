import { put, takeEvery } from "redux-saga/effects";
import { axiosRequest, RequestMethod } from "../../configs/axios";
import URI from "../../configs/Uri";
import { ActionType } from "../../constants";
import { authenticationAction, postAction, tagAction } from "../actions";

function* logoutProcess(action) {
  try {
    yield put(postAction.resetPostReducer());
    yield put(tagAction.resetTagReducer());
    yield put(authenticationAction.resetAuthenticationReducer());
    yield put(authenticationAction.logoutSuccess());
  } catch (e) {
    console.log(e);
    yield put(authenticationAction.logoutFailed());
  }
}

function* loginProcess(action) {
  try {
    const requestURI = URI.getCurrUser + "/" + action.payload.username;
    const response = yield axiosRequest(RequestMethod.get, requestURI);
    const currUser = response.data.payload.data;
    yield put(authenticationAction.loginSuccess(currUser));
  } catch (e) {
    console.log(e);
    yield put(authenticationAction.loginFailed());
  }
}

function* authenticationSaga() {
  yield takeEvery(ActionType.LOGOUT, logoutProcess);
  yield takeEvery(ActionType.LOGIN, loginProcess);
}

export default authenticationSaga;
