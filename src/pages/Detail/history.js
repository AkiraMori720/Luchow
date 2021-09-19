import React from 'react';
import * as S from './styles';

const History = React.memo(({name, time, price, usd, unit}) => (
 <S.HistoryContainer>
     <S.BidderImage src={"/images/profile.png"}/>
     <S.BidderContent>
         <S.BidderName>{name} <span>placed a bid</span></S.BidderName>
         <S.BidTimeAgo>{time}</S.BidTimeAgo>
     </S.BidderContent>
     <S.BidAmount>
        <S.PriceContainer>
            <S.HistoryCoinImage src={"/images/erc721.png"}/>
            <S.HistoryPrice>{price}</S.HistoryPrice>
            <S.HistoryUnit>{unit}</S.HistoryUnit>
        </S.PriceContainer>
         <S.UsdPrice>
             ≈ $ {usd}
         </S.UsdPrice>
     </S.BidAmount>
 </S.HistoryContainer>
));




export default History;
