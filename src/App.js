import React from 'react';
import './App.css';

import {BrowserRouter as Router,
  Switch, 
  Route, 
 } from "react-router-dom";

import welcomePage from "./Containers/welcomePage/welcomePage";
import SignUp from "./Components/SignUp/SignUp";
import Search from './Components/Search/Search';

function App() {
  return (
    <div className="App">
      <Router>

        <Switch>

          <Route exact path="/" component={welcomePage}/>
          <Route  exact path="/signup/" component={SignUp}/>
          <Route  exact path="/search/" component={Search}/>
          {/* TODO: add routes to the other pages */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
