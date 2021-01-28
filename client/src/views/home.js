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
    </div>
  );
}

export default Home;