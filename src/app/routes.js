import React from "react";
import { Route, Router } from "react-router-dom";
import { history, PrivateRoute } from "../_helpers";

import { Products } from "./products";
import { Login } from "./auth";
import { Tables } from "./tables";

const Routes = () => {
  return (
    <Router history={history}>
      <React.Fragment>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Login} />
        <PrivateRoute
          path={`${process.env.PUBLIC_URL}/products`}
          component={Products}
        />
        <PrivateRoute
          path={`${process.env.PUBLIC_URL}/tables`}
          component={Tables}
        />
      </React.Fragment>
    </Router>
  );
};

export default Routes;
