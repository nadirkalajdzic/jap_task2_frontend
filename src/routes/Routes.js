import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage/LandingPage";
import Page404 from "../pages/Page404/Page404";
import LoginPage from "../pages/LoginPage/LoginPage";

import PrivateRoute from "./PrivateRoute";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import SingleItemPage from "../pages/SingleItemPage/SingleItemPage";

function Routes() {
  return (
    <Router basename="">
      <Switch>
        <PrivateRoute
          exact={true}
          path="/"
          component={LandingPage}
          title="Home"
        />
        <PrivateRoute
          exact={true}
          path="/landing"
          component={LandingPage}
          title="Home"
        />
        <PrivateRoute
          exact={true}
          path="/login"
          authorize
          isLoggedIn
          component={LoginPage}
          title="Login"
        />
        <PrivateRoute
          exact={true}
          path="/register"
          authorize
          isLoggedIn
          component={RegisterPage}
          title="Register"
        />
        <PrivateRoute
          exact={true}
          path="/item/:id"
          component={SingleItemPage}
          title="Movie"
        />
        <Route path="*" component={Page404} title="404" />
      </Switch>
    </Router>
  );
}

export default Routes;
