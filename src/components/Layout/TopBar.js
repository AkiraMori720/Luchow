import React, { Component } from "react";
import * as S from "./styles";

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
      showDropDown: false
    };
  }


  render() {
    const {isLogin, showDropDown} = this.state;
    return (
      <React.Fragment>
        <header id="page-topbar">
          <S.HeaderContainer>
            <S.HeaderLogo href={"/"}>
              <img src={"/images/logo-header.png"} alt={"logo"}/>
              <S.HeaderLogoLabel>
                LUCHOW
              </S.HeaderLogoLabel>
              <S.HeaderNFT>
                NFT
              </S.HeaderNFT>
            </S.HeaderLogo>
            <S.HeaderMiddle>
              <S.LinkMarket href={"/"}>Marketplace</S.LinkMarket>
              <S.LinkBuy href={"https://binance.com"}>Buy LUCHOW</S.LinkBuy>
            </S.HeaderMiddle>
            <S.HeaderRight>
              {
                isLogin?
                    <>
                      <S.CreateBtn onClick={() => this.props.history.push('/create')}>Create</S.CreateBtn>
                      <S.AccountCircleBtn onClick={() => this.setState({showDropDown: !showDropDown})} size={48}/>
                    </>
                    :<S.SignInBtn>Sign in</S.SignInBtn>
              }
              {
                showDropDown &&
                    <S.DropDownMenus>
                      <S.DropDownMenu onClick={() => { this.props.history.push('/profile'); this.setState({showDropDown: false})}}>My items</S.DropDownMenu>
                      <S.DropDownMenu onClick={() => { this.props.history.push('/edit_profile'); this.setState({showDropDown: false})}}>Edit profile</S.DropDownMenu>
                      <S.DropDownMenu onClick={() => { this.props.history.push('/sign_out'); this.setState({showDropDown: false})}}>Sign out</S.DropDownMenu>
                    </S.DropDownMenus>
              }
            </S.HeaderRight>
          </S.HeaderContainer>
        </header>
      </React.Fragment>
    );
  }
}

export default TopBar;
