import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const saveStateToLocalStorage = (state) => {
  try {
    localStorage.setItem("savedState", JSON.stringify(state));
  } catch (e) {
    console.error(e);
  }
};

const loadStateFromLocalStorage = () => {
  try {
    const stateStr = localStorage.getItem("savedState");
    return stateStr ? JSON.parse(stateStr) : undefined;
  } catch (e) {
    console.error(e);
    return undefined;
  }
};

const persistedStore = loadStateFromLocalStorage();

const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
  devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  preloadedState: persistedStore,
});

store.subscribe(() => {
  saveStateToLocalStorage(store.getState());
});

sagaMiddleware.run(rootSaga);

export default store;
