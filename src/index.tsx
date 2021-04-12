import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "./App";
import Start from "./Start";
import Game from "./Game";
import Header from "./Header";
import GameOver from "./GameOver";
import Footer from "./Footer"

ReactDOM.render(
  <React.StrictMode>
    <div className="flex flex-col h-screen justify-between">
    <Header />
    <Router>
      <div className="container mx-auto px-4 mt-5 mb-auto h-10">
        <Route path="/play" component={Game} />
        <Route path="/start" component={Start} />
        <Route path="/gameover" component={GameOver} />
        <Route path="/" exact component={App} />
      </div>
      <div className="h-10">
      <Footer />
      </div>
    </Router>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
