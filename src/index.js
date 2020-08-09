import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "tachyons";
import CardList from "./CardList/CardList";
import {robots} from "./shared/robots"


ReactDOM.render(
  <React.StrictMode>
    <div>
      <CardList robots={robots} />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorker.unregister();
