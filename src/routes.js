import React from "react";
import App from "./App";
import { Switch, Route, Redirect } from "react-router-dom";
import ViewDetails from "./components/viewDetails";
import ErrorPage from "./components/ErrorPage";

const appRoute = () => (
  <Switch>
    {/* <Route exact path="/view/:id" component={ViewDetails} /> */}
    <Route
      exact
      path="/view/:id"
      render={(props) =>
        props.match.params.id ? (
          <ViewDetails {...props} />
        ) : (
          <Redirect to="/error" />
        )
      }
    />
    <Route exact path="/" component={App} />
    <Route component={ErrorPage} />
  </Switch>
);

export default appRoute;
