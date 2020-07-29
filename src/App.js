import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./components/home/HomePage";
import PageNotFound from "./components/PageNotFound";
import Networth from "./components/networthChart/Networth";
import Holdings from "./components/holdingsTable/Holdings";
import SideNav from "./common/SideNav";

function App() {
  return (
    <div className="App container">
      <div className="side-bar">
        <SideNav />
      </div>
      <div className="wrapper">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/holdings" component={Holdings} />
          <Route path="/networth" component={Networth} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
