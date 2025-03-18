import { put, takeEvery } from "redux-saga/effects";
import { axiosRequest, RequestMethod } from "../../configs/axios";
import URI from "../../configs/Uri";
import { ActionType } from "../../constants";
import { authenticationAction, postAction, tagAction } from "../actions";
var SHA512 = require("crypto-js/sha512");

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
    const username = action.payload.username;
    const requestURI1 = URI.getUserSalt.replace("{username}", username);
    const response1 = yield axiosRequest(RequestMethod.get, requestURI1);
    if (response1.data === null) {
      yield put(authenticationAction.loginFailed());
    } else {
      const newPassword = SHA512(
        response1.data.payload.data.salt + action.payload.password
      ).toString();
      const requestURI2 = URI.getUser
        .replace("{username}", username)
        .replace("{password}", newPassword);
      const response2 = yield axiosRequest(RequestMethod.get, requestURI2);
      if (response2.data === null) {
        yield put(authenticationAction.loginFailed());
      } else {
        const currUser = response2.data.payload.data;
        yield put(authenticationAction.loginSuccess(currUser));
      }
    }
  } catch (e) {
    console.log(e);
    yield put(authenticationAction.loginFailed());
  }
}

function* createUser(action) {
  try {
    const response = yield axiosRequest(
      RequestMethod.POST,
      URI.postUser,
      action.payload.newUser
    );
    if (response.data === null) {
      yield put(authenticationAction.createUserFailed());
    } else {
      yield put(authenticationAction.createUserSuccess());
    }
  } catch (e) {
    console.log(e);
    yield put(authenticationAction.createUserFailed());
  }
}

function* checkUsername(action) {
  try {
    const requestURI = URI.getUserSalt.replace(
      "{username}",
      action.payload.username
    );
    const response = yield axiosRequest(RequestMethod.GET, requestURI);
    if (response.data === null) {
      yield put(authenticationAction.checkUsernameSuccess(true));
    } else {
      yield put(authenticationAction.checkUsernameSuccess(false));
    }
  } catch (e) {
    console.log(e);
    yield put(authenticationAction.checkUsernameFailed());
  }
}

function* authenticationSaga() {
  yield takeEvery(ActionType.LOGOUT, logoutProcess);
  yield takeEvery(ActionType.LOGIN, loginProcess);
  yield takeEvery(ActionType.CREATE_USER, createUser);
  yield takeEvery(ActionType.CHECK_USERNAME, checkUsername);
}

export default authenticationSaga;
