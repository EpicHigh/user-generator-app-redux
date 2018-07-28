import { createStore, combineReducers } from "redux";
import generateUser from "../reducers/users";
import changeIndex from "../reducers/index";

export default () =>
  createStore(
    combineReducers({ user: generateUser, index: changeIndex }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
