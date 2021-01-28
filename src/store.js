import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import {createLogger} from "redux-logger"
import thunk from "redux-thunk";

import {  persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const logger=createLogger({
  diff: true,
})

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(persistedReducer, applyMiddleware(thunk, logger));
  return { store };
};