import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main.js";
import Data from "./pages/Data.js";
import "./index.css";



class App extends Component {


  render() {
    return (
      <Router>
      <div>
        <Switch>
          <Route exact path="/Main" component={Main} />
          <Route exact path="/Data" component={Data} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;