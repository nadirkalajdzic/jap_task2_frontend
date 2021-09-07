import React from "react";
import { Link } from "react-router-dom";
import Page from "../../components/Page/Page";

import Breadcrumbs from "@material-ui/core/Breadcrumbs";

import "./LoginPage.css";
import LoginPageForm from "../../components/LoginPageForm/LoginPageForm";

function LoginPage() {
  return (
    <Page>
      <div className="auth-page">
        <div className="auth-page-breadcrumbs">
          <Breadcrumbs separator="/">
            <Link className="link-breadcrumb bold" to="/">
              Moviesapp
            </Link>
            <div className="auth-page-current">Login</div>
          </Breadcrumbs>
        </div>
        <div className="auth-page-header bold">Login</div>
        <LoginPageForm />
      </div>
    </Page>
  );
}

export default LoginPage;
