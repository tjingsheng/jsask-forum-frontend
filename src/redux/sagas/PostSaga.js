import { put, takeEvery } from "redux-saga/effects";
import { axiosRequest, RequestMethod } from "../../configs/axios";
import URI from "../../configs/Uri";
import { ActionType } from "../../constants";
import { postAction } from "../actions";

function* getAllPosts(action) {
  try {
    const requestURI = URI.getAllPosts + "/" + action.payload.userId;
    const response = yield axiosRequest(RequestMethod.get, requestURI);
    const allPosts = response.data.payload.data;
    yield put(postAction.setAllPosts(allPosts));
    yield put(postAction.fetchAllPostsSuccess());
  } catch (e) {
    console.log(e);
    yield put(postAction.fetchAllPostsFailed());
  }
}

function* getCurrPost(action) {
  try {
    const requestURI =
      URI.getCurrPost +
      "/" +
      action.payload.currPostKeys.userId +
      "/" +
      action.payload.currPostKeys.postId;
    const response = yield axiosRequest(RequestMethod.get, requestURI);
    const currPost = response.data.payload.data;
    yield put(postAction.setCurrPost(currPost));
    yield put(postAction.fetchCurrPostSuccess());
  } catch (e) {
    console.log(e);
    yield put(postAction.fetchCurrPostFailed());
  }
}

function* postSaga() {
  yield takeEvery(ActionType.FETCH_ALL_POSTS, getAllPosts);
  yield takeEvery(ActionType.FETCH_CURR_POST, getCurrPost);
}

export default postSaga;
