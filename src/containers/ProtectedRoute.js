import React, { Suspense } from "react";
import { Route, Redirect } from "react-router-dom";
import userContext from "./UserContext";

export default function ProtectedRoute(props) {
  const { path = "/", exact = false, component: Component, ...rest } = props;
  return (
    <Route
      path={path}
      exact={exact}
      render={routerprops => {
        return (
          <userContext.Consumer>
            {context => {
              const { user: { email = "" } = {} } = context;
              return email ? (
                <Suspense fallback={<div>Loading...</div>}>
                  <Component {...routerprops} {...rest} />
                </Suspense>
              ) : (
                <Redirect to="/signin" />
              );
            }}
          </userContext.Consumer>
        );
      }}
    />
  );
}
