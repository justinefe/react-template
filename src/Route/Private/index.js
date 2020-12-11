import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...props }) => {
  const authenticated = useSelector(
    ({ AuthReducer: { isAuthenticated } }) => isAuthenticated
  );
  return (
    <Route
      {...props}
      render={(innerProps) =>
        authenticated ? <Component {...innerProps} /> : <Redirect to='/' />
      }
    />
  );
};
export default PrivateRoute;
