import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./module/Home";
import NoMatch from "./NoMatch";

export const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NoMatch} />
    </Switch>
  </Router>
);
