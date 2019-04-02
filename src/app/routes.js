import React from "react";
import { Route, Router } from "react-router-dom";
import { history } from "../_helpers";

import { Products } from "./products";

const Routes = () => {
  return (
    <Router history={history}>
      <React.Fragment>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Products} />
      </React.Fragment>
    </Router>
  );
};

export default Routes;
