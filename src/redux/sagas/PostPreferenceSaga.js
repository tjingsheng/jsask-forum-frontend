import { put, takeEvery } from "redux-saga/effects";
import { axiosRequest, RequestMethod } from "../../configs/axios";
import URI from "../../configs/Uri";
import { ActionType } from "../../constants";
import { postPreferenceAction } from "../actions";

function* putPostPreference(action) {
  try {
    const requestURI = URI.putPostPreference;
    const payload = action.payload;
    yield axiosRequest(RequestMethod.PUT, requestURI, payload);
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
