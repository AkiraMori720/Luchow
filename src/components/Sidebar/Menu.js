import React from 'react';
import * as S from './styles';



const Menu = ({onClick, icon, label, subLabel }) => {
  return (
    <S.MenuContainer onClick={() => onClick()}>
      <S.ButtonContainer>
      {
          icon &&
            <S.MenuIcon>
              <img src={icon} alt={"logo"}/>
            </S.MenuIcon>
      }
        <S.MenuLabel>
          {label}
        </S.MenuLabel>
      </S.ButtonContainer>
    </S.MenuContainer>
  )
};


export default Menu;
