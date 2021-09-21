import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import TopBar from "./TopBar";
import * as S from "./styles";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false
    };
  }

  render() {
    return (
      <React.Fragment>
        <div id="layout-wrapper">
          <TopBar {...this.props} onLogin={() => this.setState({isLogin: true})} onLogout={() => this.setState({isLogin: false})} isLogin={this.state.isLogin}/>
          <S.Main>
            {this.props.children}
          </S.Main>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Layout);
