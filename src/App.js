import React from "react";
import TodoAp from "./component/TodoAp/TodoAp";
import About from "./component/About/About";
import Header from "./component/Header/Header";
import {BrowserRouter as Router,Route} from "react-router-dom";

export default () => {
  return (   
  <Router>
    <Header />
    <Route path="/" exact component={TodoAp} />
    <Route path="/about" component={About} />
  </Router>
  );
};