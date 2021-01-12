import React, {useState, useEffect} from 'react';
import './App.css';
// import TopNavigation from './components/topNavigation/TopNavigation';
// import AllBoards from './components/allBoards/AllBoards';
// import { boardsTestData } from './test/exampleData/exampleData';
import Boards from './views/boards';
import {isUserLoggedIn} from './authorization/authService';

import Home from './views/home';
import Callback from './authorization/callback';
import Login from './authorization/login'
import Logout from './authorization/logout'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const SecuredRoutes = () => {
  return (
    <>
      <Route path="/boards">
          <Boards />
      </Route>
      <Route path="/logout">
          <Logout />
      </Route>
    </>
  )
}

const SecuredLinks = () => {
  return (
    <>
      <li>
        <Link to="/boards">Boards</Link>
      </li>
      <li>
        <Link to="/logout">Logout</Link>
      </li>
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
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {isLoggedOn && <SecuredLinks />}
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
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
    // <React.Fragment>
    //   <TopNavigation />
    //   <AllBoards boards={boardsTestData} />
    // </React.Fragment>
  );
}

export default App;
