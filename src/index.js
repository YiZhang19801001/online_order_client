import React from "react";
import ReactDOM from "react-dom";
import { StoreContext } from "redux-react-hook";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./_reducers";
import thunk from "redux-thunk";

import App from "./app/App.jsx";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <StoreContext.Provider store={store}>
    <App />
  </StoreContext.Provider>,
  document.querySelector("#root")
);
