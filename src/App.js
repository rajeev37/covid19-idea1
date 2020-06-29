import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.scss';
import LoginSignUp from './Components/LoginSignUp/LoginSignUp.js';

import { BrowserRouter as Router } from "react-router-dom";


import InnerHeader from "./Components/InnerHeader/InnerHeader.js";

import Assessment from "./Components/Assessment/Assessment.js";

const NavRoute = ({exact, path, component: Component}) => (
  <Route exact={exact} path={path} render={(props) => (
    <main id="inner-content">
      <InnerHeader />
      {/* <SideBar /> */}
      <Component {...props}/>
    </main>
  )}/>
)
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route component={LoginSignUp} exact path="/" />
          <NavRoute exact component={Assessment} path="/assessment" />
          {/* <NavRoute exact component={DashBoard} path="/dashboard" /> */}
          {/* <Route component={Login} exact path="/sign-in" /> */}
        </Switch>
      </Router>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
