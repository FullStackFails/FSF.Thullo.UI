import React, { useState, useEffect } from "react";
import "./App.css";

import { isUserLoggedIn } from "./authorization/authService";

import Home from "./views/home";
import Callback from "./authorization/callback";
import Login from "./authorization/login";
import Logout from "./authorization/logout";
import MyBoards from "./views/myBoards/myBoards";

import Header from "./components/header/Header";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const SecuredRoutes = () => {
  return (
    <>
      <Route path="/logout">
        <Logout />
      </Route>
      <Route path="/myboards">
        <MyBoards />
      </Route>
    </>
  );
};

function App() {
  const [isLoggedOn, setIsLoggedOn] = useState(false);

  useEffect(() => {
    async function isLoggedIn() {
      let response = await isUserLoggedIn();
      setIsLoggedOn(response);
    }
    isLoggedIn();
  }, []);

  return (
    <Router>
      <Header isAuthorized={isLoggedOn} />
      {/* Application Content goes here... */}

      <Switch>
        {isLoggedOn && <SecuredRoutes />}
        <Route path="/callback">
          <Callback />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home actions={{ setIsLoggedOn }} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
