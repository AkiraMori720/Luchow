import React from "react";
import { Route } from "react-router-dom";

const AppRoute = ({
  component: Component,
  layout: Layout,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {

      return (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      );
    }}
  />
);

export default AppRoute;
