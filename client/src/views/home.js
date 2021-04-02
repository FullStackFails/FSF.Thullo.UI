import React, { useEffect } from "react";
import { isUserLoggedIn } from "../authorization/authService";

const Home = ({ actions }) => {
  useEffect(() => {
    async function isLoggedIn() {
      let response = await isUserLoggedIn();
      actions.setIsLoggedOn(response);
    }
    isLoggedIn();
  }, [actions]);

  return <div></div>;
};

export default Home;
