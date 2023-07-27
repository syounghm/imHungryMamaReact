import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ProductCatalog from "../pages/ProductCatalog";
// import { catalogContext } from

const catalogRouter = (props) => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route
        exact
        path={`${path}/ProductCatalog/:catalogId`}
        render={() => <ProductCatalog />}
      />
    </Switch>
  );
};
