import { put, takeEvery } from "redux-saga/effects";
import { axiosRequest, RequestMethod } from "../../configs/axios";
import URI from "../../configs/Uri";
import { ActionType, ErrorType } from "../../constants";
import { postAction } from "../actions";

function* fetchAllPosts(action) {
  try {
    const requestURI = URI.getAllPosts + "/" + action.payload.userID;
    const response = yield axiosRequest(RequestMethod.get, requestURI);
    const allPosts = response.data.payload.data;
    yield put(postAction.setAllPosts(allPosts));
    yield put(postAction.fetchAllPostsSuccess());
  } catch (e) {
    console.log(e);
    yield put(postAction.fetchAllPostsFailed(ErrorType.FETCH_ALL_POSTS_ERROR));
  }
}

function* fetchAllComments(action) {
  try {
    // ADD LOGIC TO SPECIFY POSTID IN AXIOS REQUEST
    const response = yield axiosRequest(RequestMethod.get, URI.getAllComments);
    const allComments = response.data.payload.data;
    yield put(postAction.setAllComments(allComments));
    yield put(postAction.fetchAllCommentsSuccess());
  } catch (e) {
    console.log(e);
    yield put(postAction.fetchAllPostsFailed(ErrorType.FETCH_ALL_POSTS_ERROR));
  }
}

function* postSaga() {
  yield takeEvery(ActionType.FETCH_ALL_POSTS, fetchAllPosts);
  yield takeEvery(ActionType.FETCH_ALL_COMMENTS, fetchAllComments);
}

export default postSaga;
