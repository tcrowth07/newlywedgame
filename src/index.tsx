import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import App from "./App";
import Start from "./Start"
import Game from "./Game";
import Header from "./Header"

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Router>
      <Route path="/play" component={Game} />
      <Route path="/start" component={Start} />
      <Route path="/" exact component={App} />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
