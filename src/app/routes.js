import React from "react";
import { Route, Router } from "react-router-dom";
import { history } from "../_helpers";

import { Products } from "./products";
import { Login } from "./auth";

const Routes = () => {
  return (
    <Router history={history}>
      <React.Fragment>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Login} />
      </React.Fragment>
    </Router>
  );
};

export default Routes;
