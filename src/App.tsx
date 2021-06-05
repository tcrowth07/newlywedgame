import { Route, Switch, useLocation } from "react-router-dom";

import Start from "./Start";
import Game from "./Game";
import Header from "./Components/Header";
import GameOver from "./GameOver";
import Footer from "./Components/Footer";
import Menu from "./Menu";
import Feedback from "./Feedback";
import FeedbackConfirmation from "./FeedbackConfimation";

import { AnimatePresence } from "framer-motion";

function App() {
  let location = useLocation();

  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <div className="container mx-auto px-4 mt-5 mb-auto">
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/play" component={Game} />
            <Route exact path="/start" component={Start} />
            <Route exact path="/gameover" component={GameOver} />
            <Route exact path="/feedback" component={Feedback} />
            <Route exact path="/feedback-confirmation" component={FeedbackConfirmation} />
            <Route exact path="/" component={Menu} />
          </Switch>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
}
export default App;
