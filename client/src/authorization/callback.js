import React, { useEffect, useState } from "react";
import { redirectCallBack, isUserLoggedIn } from "./authService";
import { Redirect } from "react-router-dom";

const Callback = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    async function getUserfromUrl() {
      let response = await isUserLoggedIn();
      setIsLoggedIn(response);

      if (!response) {
        let redirResp = await redirectCallBack();
        setIsLoggedIn(redirResp);
      }
    }
    getUserfromUrl();
  }, []);

  if (isLoggedIn) return <Redirect to="/myBoards" />;

  return <></>;
};

export default Callback;
