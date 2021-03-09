 
import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Main from './components/main/Main';
import Error from './components/error/Error';
import Details from './components/userDetails/Details';

function App() {
  return (
    <Router>
       <Switch>
           {/* hard path */}
          <Route path="/main">
            <Main/>
          </Route>
          <Route exact path="/">
            <Main/>
        </Route>
        <Route path="/user/:userId">
            <Details/>
          </Route>
          <Route path="*">
            <Error/>
          </Route>
          {/* dynamics path set */}
          
        </Switch>      
    </Router>
  );
}

export default App;
