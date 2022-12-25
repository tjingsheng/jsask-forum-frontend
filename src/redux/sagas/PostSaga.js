import { put, takeEvery } from "redux-saga/effects";
import { axiosRequest, RequestMethod } from "../../configs/axios";
import URI from "../../configs/Uri";
import { ActionType, ErrorType } from "../../constants";
import { postAction } from "../actions";

function* fetchAllPosts(action) {
  try {
    const response = yield axiosRequest(RequestMethod.get, URI.getAllPosts);
    const allPosts = response.data.payload.data;
    yield put(postAction.setAllPosts(allPosts));
    yield put(postAction.fetchAllPostSuccess());
  } catch (e) {
    console.log(e);
    yield put(postAction.fetchAllPostFailed(ErrorType.FETCH_ALL_POSTS_ERROR));
  }
}

function* postSaga() {
  yield takeEvery(ActionType.FETCH_ALL_POSTS, fetchAllPosts);
}

export default postSaga;
