import React, { useState, useEffect } from "react";
import "./App.css";

import { isUserLoggedIn } from "./authorization/authService";

import Home from "./views/home";
import Callback from "./authorization/callback";
import Login from "./authorization/login";
import Logout from "./authorization/logout";

import Button from "react-bootstrap/Button";
import Header from "./components/header/Header";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const SecuredRoutes = () => {
  return (
    <>
      <Route path="/logout">
        <Logout />
      </Route>
    </>
  );
};

const UnsecuredLinks = () => {
  return (
    <>
      <Link to="/login">
        <Button variant="primary">Login</Button>
      </Link>
      <Link to="/">
        <Button variant="outline-primary">Register</Button>
      </Link>
    </>
  );
};

const SecuredLinks = ({ history }) => {
  return (
    <>
      <Link to="/logout">
        <Button variant="outline-primary">Logout</Button>
      </Link>
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
      <Header>{isLoggedOn ? <SecuredLinks /> : <UnsecuredLinks />}</Header>
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
