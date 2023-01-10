import { put, takeEvery } from "redux-saga/effects";
import { ActionType, ErrorType } from "../../constants";
import {
  authenticationAction,
  postAction,
  tagAction,
  userAction,
} from "../actions";

function* logoutProcess(action) {
  try {
    yield put(postAction.resetPostReducer());
    yield put(userAction.resetUserReducer());
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
    const values = action.payload.loginForm;
    yield put(postAction.resetPostReducer());
    yield put(userAction.resetUserReducer());
    yield put(tagAction.resetTagReducer());
    yield put(userAction.initUserByUsername(values.username));
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
