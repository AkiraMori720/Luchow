import styled from 'styled-components';
import {AccountCircle} from '@styled-icons/material/AccountCircle';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    background-color: #fafafa;
    height: 80px;
    padding: 0 20px;
`;

export const HeaderLogo = styled.a`
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    text-decoration: unset;
`;

export const HeaderLogoLabel = styled.div`
    color: #f0b90b;
`;

export const HeaderNFT = styled.div`
    color: 'black';
`;

export const HeaderMiddle = styled.div`
    display: flex;
    align-items: center;
    font-size: 20px;
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
    display: flex;
    align-items: center;
    position: relative;
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
`;

export const DropDownMenu = styled.div`
    padding 12px 24px;
    width: 100%;
    cursor: pointer;
    &:hover {
        background-color: #e3e3e3;
    }
`;
