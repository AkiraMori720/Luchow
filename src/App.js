import React, { Component } from "react";
import { Switch, BrowserRouter as Router } from "react-router-dom";

// Import Routes
import routes from "./routes";
import AppRoute from "./routes/route";

// layouts
import Layout from "./components/Layout";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <React.Fragment>
        <Router>
          <Switch>
            {
              routes.map((route, idx) => 
                <AppRoute
                path={route.path}
                layout={Layout}
                component={route.component}
                key={idx}
              />
              )
            }
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
