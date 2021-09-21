import React from 'react';
import * as S from './styles';
import Menu from "./Menu";

const Sidebar = ({history, closeMini, isLogin, onLogin, onLogout}) => {

  return (
    <S.Container>
      <S.Navbar>
        <S.CloseContainer><S.CloseBtn size={40} onClick={() => (closeMini())}/></S.CloseContainer>
        <S.HeaderLogo href={"/"}>
          <S.LogoImage src={"/images/logo.png"} alt={"logo"}/>
          <S.HeaderLogoLabel>
            LUCHOW
          </S.HeaderLogoLabel>
          <S.HeaderNFT>
            NFT
          </S.HeaderNFT>
        </S.HeaderLogo>
        <S.Menus>
          <Menu onClick={() => {closeMini(); history.push('/'); }} label="MarketPlace" />
          <Menu onClick={() => {closeMini(); history.push('/'); }} label="Buy Luchow"/>
          {
            isLogin ?
              <>
                <Menu onClick={() => {closeMini(); history.push('/create');}} label="Create"/>
                <Menu onClick={() => {closeMini(); history.push('/profile'); }} label="My Items"/>
                <Menu onClick={() => {closeMini(); history.push('/edit_profile'); }} label="Edit Profile"/>
                <Menu onClick={() => {closeMini(); onLogout();}} label="Sign out"/>
              </>
                :
            <Menu onClick={() => {closeMini(); onLogin()}} label="Sign in" />
          }
        </S.Menus>
      </S.Navbar>
    </S.Container>
  );
};

export default Sidebar;
