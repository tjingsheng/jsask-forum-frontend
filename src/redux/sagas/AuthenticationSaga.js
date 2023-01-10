import { put, takeEvery } from "redux-saga/effects";
import { axiosRequest, RequestMethod } from "../../configs/axios";
import URI from "../../configs/Uri";
import { ActionType, ErrorType } from "../../constants";
import { authenticationAction, postAction, tagAction } from "../actions";

function* logoutProcess(action) {
  try {
    yield put(postAction.resetPostReducer());
    yield put(tagAction.resetTagReducer());
    yield put(authenticationAction.resetAuthenticationReducer());
    yield put(authenticationAction.logoutSuccess());
  } catch (e) {
    console.log(e);
    yield put(authenticationAction.logoutFailed(ErrorType.LOGOUT_ERROR));
  }
}

function* loginProcess(action) {
  try {
    const requestURI = URI.getCurrUser + "/" + action.payload.username;
    const response = yield axiosRequest(RequestMethod.get, requestURI);
    yield put(authenticationAction.initUser(response.data.payload.data));
    yield put(authenticationAction.loginSuccess());
  } catch (e) {
    console.log(e);
    yield put(authenticationAction.loginFailed(ErrorType.LOGIN_ERROR));
  }
}

function* authenticationSaga() {
  yield takeEvery(ActionType.LOGOUT, logoutProcess);
  yield takeEvery(ActionType.LOGIN, loginProcess);
}

export default authenticationSaga;
