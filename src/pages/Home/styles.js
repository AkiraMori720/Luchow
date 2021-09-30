import styled from 'styled-components';
import {Search} from "@styled-icons/material/Search";
import {FilterAlt} from "@styled-icons/material/FilterAlt";
import {PlayCircleOutline} from "@styled-icons/material";
import {Image} from "@styled-icons/material/Image";
import {Heart} from "@styled-icons/feather/Heart";
import {Circle} from "@styled-icons/fa-regular/Circle";
import {DotCircle} from "@styled-icons/fa-regular/DotCircle"
import {Close} from "@styled-icons/material/Close";
import {Heart as HeartFill} from "@styled-icons/fa-solid/Heart";

export const Container = styled.div`
    margin 48px auto;
    max-width: 1200px;
`;

export const Header = styled.div`
   height: 200px;
   @media (min-width: 768px){
        height: 500px;
    }
`;

export const SlideContainer = styled.div`
    cursor: pointer;
    position: relative;
    img{
        width: 200px;
        height: 200px;
    }
    @media (min-width: 768px){
     img{
            width: 500px;
            height: 500px;
        }
    }
`;

export const SlideInfo = styled.div`
    position: absolute;
    bottom: 4px;
    left: 0;
    width: 100%;
    .title{
        color: white;
        font-size: 28px;
        font-weight: bold;
        padding: 0 8px;
    }
    .bottomInfo{
        padding: 4px 8px;
        .createName{
            color: white;
        }
        .bidTimeContainer{
            display: flex;
            align-items: center;
            justify-content: flex-end;
            color: white;
            .bidTime{
                background: black;
                padding: 4px;
                border-radius: 4px;
            }
        }
    }
        
  @media (min-width: 768px){
    bottom: 20px;
    .title{
       font-size: 20px;
        padding: 0 8px;
    }
    .bottomInfo{
        padding: 8px 12px;
       display: flex;
       justify-content: space-between;
       .bideTime{
            text-align: right;
       }
   }
  }
`;

export const Filter = styled.div`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding: 0 20px;
  @media (min-width: 768px){
    display flex;
  }
`;

export const FilterLeft = styled.div`
    display: block;
    align-items: center;
    margin-top: 8px;
  @media (min-width: 480px){
    display flex;
  }
`;

export const FilterRight = styled.div`
    display: block;
    align-items: center;
     margin-top: 8px;
   @media (min-width: 480px){
    display flex;
  }
`;

export const FilterBtn = styled.div`
    display: flex;
    align-items: center;
    border: solid 1px grey;
    padding: 4px 12px;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 4px;
`;

export const FilterAltIcon = styled(FilterAlt)`

`;

export const Categories = styled.div`
    display: flex;
    align-items: center;
    margin-top: 4px;
   @media (min-width: 480px){
    margin-left: 2rem;
  }
`;

export const Category = styled.div`
    margin: 0 8px;
    cursor: pointer;
    &.active{
        color: #c99400;
    }
`;

export const SearchContainer = styled.div`
    border: solid 1px grey;
    padding: 4px 12px;
    border-radius: 4px;
    margin-top: 4px;
    display: flex;
`;

export const SearchIcon = styled(Search)`
    
`;

export const SearchInput = styled.input`
    border: unset;
    flex-grow: 1;
    &:focus-visible{
        outline: unset;
    }
`;

export const OrderBy = styled.select`
    padding: 7px 12px;
    border-radius:  4px;
    margin-top: 4px;
    width: 100%;
   @media (min-width: 480px){
    margin-left: 12px;
  }
`;

export const OrderByOption = styled.option`
    
`;

export const FilterContent = styled.div`
    position: absolute;
    background-color: white;
    top: 40px;
    width: 100%;
    z-index: 999;
    padding: 20px 0px;
   @media (min-width: 480px){
    top: 48px;
    padding: 20px 24px;
  }
`;

export const FilterCategoryContainer = styled.div`
    display: flex;
    margin-top: 8px;
`;

export const FilterLabel = styled.div`
    padding: 4px;
`;

export const FilterCategories = styled.div`
     display: flex;
     flex-wrap: wrap;
`;

export const FilterClearAll = styled.div`
    margin-left: 20px;
    padding-top: 4px;
    text-decoration: underline;
    color: #c99400;
    cursor: pointer;
`;

export const FilterCategory = styled.div`
    color: grey;
    padding: 4px 12px;
    margin-left: 12px;
    cursor: pointer;
    &.active {
        color: #c99400;
        background: #f5f5f5;
        font-weight: 500;
    }
    
`;

export const FilterFooter = styled.div`
     display: block;
     justify-content: space-between;
     align-items: center;
    @media (min-width: 768px){
        display: flex;
    }
`;

export const FilterCurrencyContainer = styled.div`
     display: flex;
`;

export const FilterActionBtn = styled.div`
    background-image: linear-gradient(180deg,#F8D12F 0%,#F0B90B 100%);
    padding: 8px 36px;
    font-size: 20px;
    margin-right: 80px;
    border-radius: 4px;
    cursor: pointer;
    width: 48px;
    text-align: center;
`;

export const FilterCurrencies = styled.div`
     display: flex;
`;

export const CurrencyPrices = styled.div`
     display: flex;
     align-items: center;
     margin-left: 20px;
`;

export const CurrencyInputContainer = styled.div`
    border: 1px solid transparent;
    border-color: #EAECEF;
    border-radius: 4px;
`;

export const CurrencyInput = styled.input`
    color: #1E2329;
    padding: 4px;
    font-size: 14px;
    width: 136px;
    outline: none;
    border: none;
    border-color: #EAECEF;
    &::-webkit-inner-spin-button, &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;

export const CurrencyInputDivider = styled.div`
    margin-right: 11px;
    margin-left: 11px;
`;

export const FilterCurrency = styled.div`
    color: grey;
    padding: 4px 12px;
    margin-left: 12px;
    display: flex;
    align-items: center;
    cursor: pointer;
     &.active {
        color: #F0B90B;
        font-weight: 500;
    }
`;

export const CircleIcon = styled(Circle)`
    margin-right: 4px;
`;

export const DotCircleIcon = styled(DotCircle)`
    margin-right: 4px
`;

export const FilterString = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 40px;
    padding: 0 20px;
`;

export const FilterStringItem = styled.div`
    display: flex;
    align-items: center;
    margin-right: 16px;
    margin-top: 8px;
          
    label{
        margin-top: 4px;
        margin-right: 8px;
    }
`;

export const FilterValues = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  margin-top: 4px;
`;

export const FilterValue = styled.div`
    display: flex;
    align-items: center;
    margin-right: 8px;
    color: grey;
    font-size: 14px;
`;

export const RemoveIcon = styled(Close)`
    background: grey;
    border-radius: 8px;
    color: white;
    padding: 2px;
    margin-left: 4px;
`;


export const Nfts = styled.div`
    display: flex;
    margin-top: 40px;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
`;

export const NftContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px 16px 36px 16px;
    margin: 16px 10px;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
        box-shadow: rgb(0 0 0 / 10%) 0px 0px 15px;
    }
`;

export const NftImageContainer = styled.div`
    position: relative;
`;

export const NftImage = styled.img`
    border-radius: 8px;
    width: 248px;
    height: 248px;
`;

export const NftType = styled.div`
    background: black;
    padding: 4px;
    border-radius: 4px;
    position: absolute;
    left: 16px;
    top: 16px;
`;

export const VideoIcon = styled(PlayCircleOutline)`

`;

export const ImageIcon = styled(Image)`

`;

export const BidTime = styled.div`
    background: black;
    padding: 4px;
    border-radius: 4px;
    position: absolute;
    right: 16px;
    top: 18px;
    color: white;
    font-size: 12px;
`;

export const Favourites = styled.div`
    background: black;
    padding: 4px;
    border-radius: 4px;
    position: absolute;
    right: 16px;
    bottom: 16px;
    color: white;
    font-size: 12px;
    display: flex;
    align-items: center;
`;

export const LoveFillIcon = styled(HeartFill)`
    color: #F0B90B;
`;

export const LoveIcon = styled(Heart)`

`;


export const FavouritesCount = styled.div`
    margin-left: 4px;
`;

export const NftTitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 8px;
`;

export const NftTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
`;

export const NftNetwork = styled.div`
    padding: 4px 8px;
    background: #d1d1d1;
    color: black;
    font-size: 12px;
    border-radius: 4px;
`;

export const CurrentBid = styled.div`
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
`;

export const OptionText = styled.div`
    font-size: 14px;
    color: grey;
`;

export const OptionContent = styled.div`
    text-align: right;
`;

export const PriceContainer = styled.div`
    display: flex;
`;

export const CoinImage = styled.img`
    width: 16px;
    height: 16px;
`;

export const Price = styled.div`
    
`;


export const Unit = styled.div`
    
`;


export const UsdPrice = styled.span`
    
`;


export const Creator = styled.div`
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
`;

export const CreatorImage = styled.img`
    width: 12px;
    height: 12px;
    border-radius: 6px;
`;

export const CreatorName = styled.div`
    
`;

export const CreatorContent = styled.div`
    display: flex;
    align-items: center;
`;



