import React, { useEffect, useState } from 'react';
import {logout, isUserLoggedIn} from './authService';
import {Redirect} from 'react-router-dom';

const Logout = () => {
  const [isLoggedOn, setIsLoggedOn] = useState(false);

  useEffect(() => {
    async function isLoggedIn() {
      await isUserLoggedIn().then(resp => {
        setIsLoggedOn(resp);
        if (resp)
          logout();
      })
    }
    isLoggedIn();
  }, [])

  return (
    <>
       {
         isLoggedOn &&
          <Redirect to="/" />
       }
    </>
  )
}

export default Logout;