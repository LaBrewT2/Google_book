import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/main";
import Data from "./pages/Data";
import "./index.css";



class App extends Component {


  render() {
    return (
      <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/data" component={Data} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;