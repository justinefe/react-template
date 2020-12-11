import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ component: Component, ...props }) => {
  const authenticated = useSelector(
    ({ AuthReducer: { isAuthenticated } }) => isAuthenticated
  );
  return (
    <Route
      {...props}
      render={(innerProps) =>
        !authenticated ? <Component {...innerProps} /> : <Redirect to='/' />
      }
    />
  );
};

export default PublicRoute;
