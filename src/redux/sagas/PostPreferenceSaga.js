import { put, takeEvery } from "redux-saga/effects";
import { axiosRequest, RequestMethod } from "../../configs/axios";
import URI from "../../configs/Uri";
import { ActionType } from "../../constants";
import { postAction, postPreferenceAction } from "../actions";

function* putPostPreference(action) {
  try {
    yield axiosRequest(RequestMethod.PUT, URI.putPreference, action.payload);

    const requestURI = URI.getAllPosts + "/" + action.payload.currUserId;
    const response = yield axiosRequest(RequestMethod.get, requestURI);
    const allPosts = response.data.payload.data;
    yield put(postAction.setAllPosts(allPosts));

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
