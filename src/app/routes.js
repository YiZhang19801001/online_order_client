import React from "react";
import { Route, Router } from "react-router-dom";
import { history, PrivateRoute } from "../_helpers";

import { Login } from "./auth";
import { Tables } from "./tables";
import { OrderMainPage } from "./orders";
import { Payment } from "./pay";

const Routes = () => {
  return (
    <Router history={history}>
      <React.Fragment>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Login} />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/login`}
          component={Login}
        />

        <PrivateRoute
          path={`${process.env.PUBLIC_URL}/orders/:table_id`}
          component={OrderMainPage}
        />
        <PrivateRoute
          path={`${process.env.PUBLIC_URL}/tables`}
          component={Tables}
        />
        <PrivateRoute
          path={`${process.env.PUBLIC_URL}/checkout/:current_order_id`}
          component={Payment}
        />
      </React.Fragment>
    </Router>
  );
};

export default Routes;
