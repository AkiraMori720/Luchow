import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import TopBar from "./TopBar";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <React.Fragment>
        <div id="layout-wrapper">
          <TopBar {...this.props}/>
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Layout);
