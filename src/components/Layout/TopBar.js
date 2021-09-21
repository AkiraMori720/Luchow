import React, { Component } from "react";
import * as S from "./styles";
import Sidebar from "../Sidebar";

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropDown: false,
      openDrop: false
    };
  }


  render() {
    const {isLogin, onLogin, onLogout} = this.props;
    const {showDropDown, openDrop} = this.state;
    return (
      <React.Fragment>
        <header id="page-topbar">
          <S.HeaderContainer>
            <S.HeaderLogo href={"/"}>
              <S.LogoImage src={"/images/logo.png"} alt={"logo"}/>
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
                    :<S.SignInBtn onClick={onLogin}>Sign in</S.SignInBtn>
              }
              {
                showDropDown &&
                    <S.DropDownMenus>
                      <S.DropDownMenu onClick={() => { this.props.history.push('/profile'); this.setState({showDropDown: false})}}>My items</S.DropDownMenu>
                      <S.DropDownMenu onClick={() => { this.props.history.push('/edit_profile'); this.setState({showDropDown: false})}}>Edit profile</S.DropDownMenu>
                      <S.DropDownMenu onClick={() => { this.setState({showDropDown: false}); onLogout()}}>Sign out</S.DropDownMenu>
                    </S.DropDownMenus>
              }
            </S.HeaderRight>
            <S.DropButton onClick={() => {console.log('open', openDrop); this.setState({openDrop: true});}} className={openDrop?"display-none":""}>
              <span className="bg-black rounded"/>
              <span className="bg-black rounded middle"/>
              <span className="bg-black rounded"/>
            </S.DropButton>
          </S.HeaderContainer>
          {
            openDrop &&
            <Sidebar {...this.props} closeMini={() => this.setState({openDrop: false})} />
          }
        </header>
      </React.Fragment>
    );
  }
}

export default TopBar;
