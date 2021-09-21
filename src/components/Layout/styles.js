import styled from 'styled-components';
import {AccountCircle} from '@styled-icons/material/AccountCircle';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const Main = styled.div`
  margin-top: 120px;
`;

export const HeaderContainer = styled.div`
    display: block;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    background-color: #fafafa;
    height: 80px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
    
  @media (min-width: 768px){
    display flex;
  }
`;

export const HeaderLogo = styled.a`
    display: none;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    text-decoration: unset;
    margin-left: 20px;
        
  @media (min-width: 768px){
    display flex;
  }
`;

export const LogoImage = styled.img`
    width: 56px;
    height: 56px;
`;

export const HeaderLogoLabel = styled.div`
    margin-left: 8px;
    color: #f0b90b;
`;

export const HeaderNFT = styled.div`
    color: 'black';
`;

export const HeaderMiddle = styled.div`
    display: none;
    align-items: center;
    font-size: 20px;
  @media (min-width: 768px){
    display flex;
  }
`;

export const LinkMarket = styled.a`
    padding: 0 8px;
    text-decoration: unset;
    color: black;
`;

export const LinkBuy = styled.a`
    padding: 0 8px;
    color: #b95e19;
    text-decoration: unset;
`;

export const HeaderRight = styled.div`
    display: none;
    align-items: center;
    justify-content: right;
    position: relative;
    margin-right: 20px;
  @media (min-width: 768px){
    display flex;
  }
`;


export const CreateBtn = styled.div`
    border: solid 1px grey;
    border-radius: 20px;
    background-image: linear-gradient(to right, #ff06a2 , #54a5ff);
    padding: 10px 28px;
    cursor: pointer;
    color: white;
    font-weight: bold;
    margin-right: 20px;
`;

export const SignInBtn = styled.div`
    border: solid 1px grey;
    border-radius: 20px;
    background-color: white;
    padding: 10px 28px;
    cursor: pointer;
    font-weight: bold;
`;

export const AccountCircleBtn = styled(AccountCircle)`
  color: grey;
  cursor: pointer;
  padding: 0 20px;
`;

export const DropDownMenus = styled.div`
    background: white;
    width: 240px;
    position: absolute;
    bottom: -144px;
    box-shadow: rgb(0 0 0 / 10%) 0px 0px 15px;
    z-index: 99;
`;

export const DropDownMenu = styled.div`
    padding 12px 24px;
    cursor: pointer;
    &:hover {
        background-color: #e3e3e3;
    }
`;



export const DropButton = styled.div`
  position: absolute;
  padding: 8px;
    top: 20px;
    left: 12px;
  border-radius: 4px;
  cursor: pointer;
  z-index: 10;

  &.display-none{
    display: none !important;
  }

  @media (min-width: 768px){
    display: none;
  }

  span{
    background-color: rgba(0,0,0,0.75);
    border-radius: .25rem;
    width: 22px; height: 2px;
    display: block;

    &.middle{
       margin-bottom: 6px; margin-top: 6px;
    }
  }
`;
