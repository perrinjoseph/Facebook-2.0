import { Redirect, Route } from "react-router-dom";
import React from "react";
import useIsAuthorized from "../../../hooks/useIsAuthorized";

function ProtectedRoute({ children, ...rest }) {
  //   const auth = useIsAuthorized();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        localStorage.getItem("jwt_token") ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
  );
}

export default ProtectedRoute;
