import { put, takeEvery } from "redux-saga/effects";
import { axiosRequest, RequestMethod } from "../../configs/axios";
import URI from "../../configs/Uri";
import { ActionType } from "../../constants";
import { postPreferenceAction } from "../actions";

function* putPostPreference(action) {
  try {
    yield axiosRequest(RequestMethod.PUT, URI.putPreference, action.payload);
    yield put(postPreferenceAction.putPostPreferenceSuccess());
  } catch (e) {
    console.log(e);
    yield put(postPreferenceAction.putPostPreferenceFailed());
  }
}

function* postPreferenceSaga() {
  yield takeEvery(ActionType.PUT_POST_PREFERENCE, putPostPreference);
}

export default postPreferenceSaga;
