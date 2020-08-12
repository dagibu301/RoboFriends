import React from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import { createStore } from "redux";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import { searchRobots } from "./reducers";
import "tachyons";

const store = createStore(searchRobots);

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Provider store={store}>
        <App />
      </Provider>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorker.unregister();
