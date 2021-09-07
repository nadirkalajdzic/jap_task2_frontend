import React from "react";
import { useHistory } from "react-router-dom";

import { Button } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import Page from "../../components/Page/Page";

import "./Page404.css";
import useStyle from "./Styles";

function Page404() {
  const classes = useStyle();
  const history = useHistory();

  const routeTo = () => history.push("/");

  return (
    <Page>
      <div className="page-error">
        <div>404</div>
        <div>
          <Button
            startIcon={<ArrowBackIcon />}
            className={classes.button}
            onClick={routeTo}
          >
            Back Home
          </Button>
        </div>
      </div>
    </Page>
  );
}

export default Page404;
