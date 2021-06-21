import { Redirect, Route } from "react-router-dom";
import React from "react";
import Profile from "../../Pages/Profile/Profile";
import useIsAuthorized from "../../../hooks/useIsAuthorized";

function ProtectedRoute({ children, auth, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
  );
}

export default ProtectedRoute;
