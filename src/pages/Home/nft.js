import React from 'react';
import * as S from './styles';

const Nft = React.memo(({type, bid_ends, favourites, title, network, price, usd, unit, creator_avatar, creator_name, onOpen}) => (
 <S.NftContainer onClick={onOpen}>
     <S.NftImageContainer>
         <S.NftImage src={"https://public.nftstatic.com/static/nft/zipped/de5e3d1eddf040e998c80c9269506672_zipped.png"}/>
         <S.NftType>
             {
                 type === 'video'? <S.VideoIcon color={'white'} size={16}/>
                     : <S.ImageIcon color={'white'} size={16}/>
             }
         </S.NftType>
         <S.BidTime>
             🕘 Ends in {bid_ends}
         </S.BidTime>
         <S.Favourites>
             <S.LoveIcon size={16}/>
             <S.FavouritesCount>{favourites}</S.FavouritesCount>
         </S.Favourites>
     </S.NftImageContainer>
     <S.NftTitleContainer>
         <S.NftTitle>{title}</S.NftTitle>
         <S.NftNetwork>{network}</S.NftNetwork>
     </S.NftTitleContainer>
     <S.CurrentBid>
        <S.OptionText>Current bid</S.OptionText>
         <S.OptionContent>
            <S.PriceContainer>
                <S.CoinImage src={"/images/erc721.png"}/>
                <S.Price>{price}</S.Price>
                <S.Unit>{unit}</S.Unit>
            </S.PriceContainer>
             <S.UsdPrice>
                 ≈ $ {usd}
             </S.UsdPrice>
         </S.OptionContent>
     </S.CurrentBid>
     <S.Creator>
         <S.OptionText>Creator</S.OptionText>
         <S.CreatorContent>
            <S.CreatorImage src={creator_avatar}/>
            <S.CreatorName>{creator_name}</S.CreatorName>
         </S.CreatorContent>
     </S.Creator>
 </S.NftContainer>
));




export default Nft;
