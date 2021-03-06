import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "./pages/index";
import Data from "./pages/data";
import "./index.css";



class App extends Component {


  render() {
    return (
      <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/saved" component={Data} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;