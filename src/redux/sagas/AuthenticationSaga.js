import { put, takeEvery } from "redux-saga/effects";
import { axiosRequest, RequestMethod } from "../../configs/axios";
import URI from "../../configs/Uri";
import { ActionType } from "../../constants";
import { authenticationAction, postAction, tagAction } from "../actions";

var CryptoJS = require("crypto-js");
var SHA512 = require("crypto-js/sha512");
var salt = () => CryptoJS.lib.WordArray.random(16).toString();

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
    const requestURI1 = URI.getCurrUser + "/" + action.payload.username;
    const response1 = yield axiosRequest(RequestMethod.get, requestURI1);
    if (response1.data === null) {
      yield put(authenticationAction.loginFailed());
    } else {
      const requestURI2 =
        URI.getCurrUser +
        "/" +
        action.payload.username +
        "/" +
        SHA512(
          response1.data.payload.data.salt + action.payload.password
        ).toString();
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
    yield axiosRequest(
      RequestMethod.POST,
      URI.createUser,
      action.payload.newUser
    );
    yield put(authenticationAction.createUserSuccess());
  } catch (e) {
    console.log(e);
    yield put(authenticationAction.createUserFailed());
  }
}

function* authenticationSaga() {
  yield takeEvery(ActionType.LOGOUT, logoutProcess);
  yield takeEvery(ActionType.LOGIN, loginProcess);
  yield takeEvery(ActionType.CREATE_USER, createUser);
}

export default authenticationSaga;
