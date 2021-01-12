import React, { useEffect, useState } from 'react';
import {logout, isUserLoggedIn} from './authService';
import {Redirect} from 'react-router-dom';

const Logout = () => {
  const [isLoggedOn, setIsLoggedOn] = useState(false);

  useEffect(() => {
    async function isLoggedIn() {
      await isUserLoggedIn().then(async resp => {
        setIsLoggedOn(resp);
        if (resp) {
          await logout().then(
            logoutResp => {
              setIsLoggedOn(logoutResp)
            });
        }
      })
    }
    isLoggedIn();
  }, [])

  return (
    <Redirect to="/" />
  )
}

export default Logout;