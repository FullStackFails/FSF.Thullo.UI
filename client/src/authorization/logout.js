import React, { useEffect } from "react";
import { logout, isUserLoggedIn } from "./authService";
import { Redirect } from "react-router-dom";

const Logout = () => {
  useEffect(() => {
    async function isLoggedIn() {
      await isUserLoggedIn().then(async (resp) => {
        if (resp) {
          await logout();
        }
      });
    }
    isLoggedIn();
  }, []);

  return <Redirect to="/" />;
};

export default Logout;
