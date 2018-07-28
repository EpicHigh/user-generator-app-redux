import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/store";
import App from "./container/App";
import { generateUser } from "./actions/users";
import registerServiceWorker from "./registerServiceWorker";

const store = configureStore();
store.dispatch(generateUser());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
