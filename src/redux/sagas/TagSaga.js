import { put, takeEvery } from "redux-saga/effects";
import { axiosRequest, RequestMethod } from "../../configs/axios";
import URI from "../../configs/Uri";
import { ActionType } from "../../constants";
import { tagAction } from "../actions";

function* fetchAllTags(action) {
  try {
    const response = yield axiosRequest(RequestMethod.get, URI.getAllTags);
    const allTags = response.data.payload.data;
    yield put(tagAction.fetchAllTagsSuccess(allTags));
  } catch (e) {
    console.log(e);
    yield put(tagAction.fetchAllTagsFailed());
  }
}

function* tagSaga() {
  yield takeEvery(ActionType.FETCH_ALL_TAGS, fetchAllTags);
}

export default tagSaga;
