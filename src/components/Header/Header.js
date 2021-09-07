import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Button from "@material-ui/core/Button";
import useButtonStyle from "./ButtonStyle";

import "./Header.css";

function Header() {
  const history = useHistory();
  const [session, setSession] = useState(
    JSON.parse(localStorage.getItem("session"))
  );

  const classes = useButtonStyle();

  const routeToHome = () => history.push("/");
  const routeToLogin = () => history.push("/login");
  const routeToRegister = () => history.push("/register");
  const logout = () => {
    localStorage.clear();
    setSession(null);
  };

  return (
    <div className="page-header">
      <div className="header-logo" onClick={routeToHome}>
        Moviesapp
      </div>
      <div className="header-login-or-register">
        {session == null && (
          <>
            <Button className={classes.button} onClick={routeToLogin}>
              LOGIN
            </Button>
            <div className="bold">OR</div>
            <Button className={classes.button} onClick={routeToRegister}>
              REGISTER
            </Button>
          </>
        )}
        {session != null && (
          <>
            <div style={{ fontWeight: 500 }}>User: {session.name}</div>
            <Button className={classes.button} onClick={logout}>
              LOGOUT
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
