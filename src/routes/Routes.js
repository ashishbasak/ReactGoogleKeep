import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MainComponent from "../components/MainComponent";
import ParentUserManagement from "../components/ParentUserManagement";

function MainRoute() {
  return (
    <Router>
      <div> 
        <Route exact path="/" component={ParentUserManagement} />
        <Route path="/home" component={MainComponent} />
      </div>
    </Router>
  );
}

export default MainRoute;