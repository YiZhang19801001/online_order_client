import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      const currentUser = JSON.parse(localStorage.getItem("staff_order_user"));
      if (!currentUser) {
        return (
          <Redirect
            to={{
              pathname: `${process.env.PUBLIC_URL}/login`,
              state: { from: props.location }
            }}
          />
        );
      }
      return <Component {...props} />;
    }}
  />
);

export default PrivateRoute;
