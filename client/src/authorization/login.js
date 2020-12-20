import React, { useEffect, useState } from 'react';
import {login, isUserLoggedIn} from './authService';
import {Redirect} from 'react-router-dom';

const Login = () => {
  const [isLoggedOn, setIsLoggedOn] = useState(false);

  useEffect(() => {
    async function isLoggedIn() {
      await isUserLoggedIn().then(resp => {
        setIsLoggedOn(resp);
        if (!resp)
          login();
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

export default Login;