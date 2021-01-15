import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import index from "./pages/index";
import data from "./pages/data";
import "./index.css";



class App extends Component {


  render() {
    return (
      <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;