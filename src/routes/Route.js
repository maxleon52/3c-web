import React from "react";
import { Route as ReactDOMRoute, Redirect } from "react-router-dom";

import { useAuth } from "../hooks/AuthContext";

function Route({ isPrivate = false, component: Component, ...rest }) {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: isPrivate ? "/" : "/dashboard" }} />
        );
      }}
    />
  );
}

export default Route;
