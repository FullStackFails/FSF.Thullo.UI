import React, { useState, useEffect } from "react";
import "./App.css";

import { isUserLoggedIn } from "./authorization/authService";

import Home from "./views/home";
import Callback from "./authorization/callback";
import Login from "./authorization/login";
import Logout from "./authorization/logout";

import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import logo from "./logo.svg";

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
      <Col className="d-flex justify-content-end align-items-center">
        <Link to="/login">
          <Button variant="primary">Login</Button>
        </Link>
        <Link to="/">
          <Button variant="outline-primary">Register</Button>
        </Link>
      </Col>
    </>
  );
};

const SecuredLinks = ({ history }) => {
  return (
    <>
      <Col className="d-flex justify-content-end align-items-center">
        <Link to="/logout">
          <Button variant="outline-primary">Logout</Button>
        </Link>
      </Col>
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
      <Row style={{ backgroundColor: "#EEEEEE" }}>
        <Col className="d-flex align-items-center">
          <img src={logo} alt="logo" />
        </Col>

        {isLoggedOn ? <SecuredLinks /> : <UnsecuredLinks />}

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
      </Row>

      {/* Application Content goes here... */}
    </Router>
  );
}

export default App;
