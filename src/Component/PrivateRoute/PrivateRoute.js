import React from "react";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  let auth = useAuth();
  return (
    <div>
      <Route
        {...rest}
        render={({ location }) =>
          auth.user.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            ></Redirect>
          )
        }
      ></Route>

      <h1>this is </h1>
    </div>
  );
};

export default PrivateRoute;
