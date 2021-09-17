import React, { Component } from "react";
import { Link } from "react-router-dom";


class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <React.Fragment>
        <header id="page-topbar">
          Header
        </header>
      </React.Fragment>
    );
  }
}

export default TopBar;
