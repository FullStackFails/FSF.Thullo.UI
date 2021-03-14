import React, {useState, useEffect} from 'react';
import './App.css';

import {isUserLoggedIn} from './authorization/authService';

import Home from './views/home';
import Callback from './authorization/callback';
import Login from './authorization/login'
import Logout from './authorization/logout'

import Button from './fsfComponents/button/Button';

import { getBoards } from './api/thulloApi';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

const SecuredRoutes = () => {
  return (
    <>
      <Route path="/logout">
          <Logout />
      </Route>
    </>
  )
}

const UnSecuredLinks = () => {
  return (
    <>
      <Link to="/login">
        <Button>Login</Button>
      </Link>
      <Link to="/">
        <Button type="primary">Register</Button>
      </Link>
    </>
  )
}

const SecuredLinks = ({history}) => {
  return (
    <>
      <Link to="/logout">
        <Button>Logout</Button>
      </Link>
    </>
  )
}

function App() {
  const [isLoggedOn, setIsLoggedOn] = useState(false);

  useEffect(() => {
    async function isLoggedIn() {
      let response = await isUserLoggedIn();
      setIsLoggedOn(response);
    }
    isLoggedIn();
  }, [])

  return (
    <Router>
    <div>
      <nav>
        {/* <Link to="/">
          <Button type="primary">Home</Button>
        </Link> */}
        {isLoggedOn ? <SecuredLinks /> : <UnSecuredLinks />}
      </nav>

      <Switch>
        {isLoggedOn && <SecuredRoutes />}
        <Route path="/callback">
          <Callback />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home actions={{setIsLoggedOn}}/>
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
