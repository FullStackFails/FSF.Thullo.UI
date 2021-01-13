import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {isUserLoggedIn} from '../authorization/authService';

const Home = ({actions}) => {
  const [isLoggedOn, setIsLoggedOn] = useState(false);

  useEffect(() => {
    async function isLoggedIn() {
      let response = await isUserLoggedIn();
      setIsLoggedOn(response);
      actions.setIsLoggedOn(response);
    }
    isLoggedIn();
  }, [])

  return (
    <div>
      <h2>Home</h2>
      {
        isLoggedOn
          ? <>
              <p>The User is logged in.</p>
              <Link to="/logout">Logout</Link>  
            </>
          : <>
              <p>The User is NOT logged in.</p>
              <Link to="/login">Login</Link>
            </>
      }
    </div>
  );
}

export default Home;