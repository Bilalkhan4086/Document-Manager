import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import LoadingScreen from "../components/loadingScreen";
import routes from "./routesList";

export const renderRoutes = () => (
  <Suspense fallback={<LoadingScreen key="loadingScreen" />}>
    <Switch>
      {routes.map((route, i) => {
        const Component = route.component;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) => <Component {...props} />}
          />
        );
      })}
    </Switch>
  </Suspense>
);
