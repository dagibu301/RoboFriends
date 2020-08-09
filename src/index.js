import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from "./Card/Card";
import * as serviceWorker from "./serviceWorker";
import "tachyons";
import { robots } from "./shared/robots";

ReactDOM.render(
  <React.StrictMode>
    <div>
      {robots.map((robot) => (
        <Card name={robot.name} email={robot.email} username={robot.username} />
      ))}
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorker.unregister();
