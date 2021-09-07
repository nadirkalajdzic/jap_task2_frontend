import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ title, exact, path, component, authorize }) {
  if (authorize !== undefined && localStorage.getItem("session") != null)
    return <Redirect to="/" />;

  return <Route exact={exact} path={path} component={component} />;
}

export default PrivateRoute;
