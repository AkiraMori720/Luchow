import React, { Component } from "react";
import { withRouter } from "react-router-dom";

// Other Layout related Component
import Footer from "./Footer";
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
          <TopBar/>

          <div className="main-content">
            <div className="page-content">{this.props.children}</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = state => {
  return {
    ...state.Layout
  };
};

export default withRouter(Layout);
