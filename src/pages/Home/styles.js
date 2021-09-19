import styled from 'styled-components';
import {Search} from "@styled-icons/material/Search";
import {FilterAlt} from "@styled-icons/material/FilterAlt";
import {PlayCircleOutline} from "@styled-icons/material";
import {Image} from "@styled-icons/material/Image";
import {Heart} from "@styled-icons/feather/Heart";

export const Container = styled.div`
    margin 48px auto;
    max-width: 1200px;
`;

export const Header = styled.div`
    
`;

export const Filter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative
`;

export const FilterLeft = styled.div`
    display: flex;
    align-items: center;
`;

export const FilterRight = styled.div`
    display: flex;
    align-items: center;
`;

export const FilterBtn = styled.div`
    display: flex;
    align-items: center;
    border: solid 1px grey;
    padding: 4px 12px;
    border-radius: 4px;
    cursor: pointer;
`;

export const FilterAltIcon = styled(FilterAlt)`

`;

export const Categories = styled.div`
    display: flex;
    align-items: center;
    margin-left: 2rem;
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
`;

export const SearchIcon = styled(Search)`
    
`;

export const SearchInput = styled.input`
    border: unset;
    &:focus-visible{
        outline: unset;
    }
`;

export const OrderBy = styled.select`
    margin-left: 12px;
    padding: 7px 12px;
    border-radius:  4px;
`;

export const OrderByOption = styled.option`
    
`;

export const FilterContent = styled.div`
    position: absolute;
    background-color: white;
    bottom: -130px;
    width: 100%;
    z-index: 999;
    padding: 20px 24px;
`;

export const FilterCategoryContainer = styled.div`
    display: flex;
`;

export const FilterLabel = styled.div`
    padding: 4px;
`;

export const FilterCategories = styled.div`
     display: flex;
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

export const FilterCurrencyContainer = styled.div`
     display: flex;
     margin-top: 20px;
`;
export const FilterCurrencies = styled.div`
     display: flex;
`;

export const FilterCurrency = styled.div`
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

export const Nfts = styled.div`
    display: flex;
    margin-top: 40px;
    width: 100%;
    flex-wrap: wrap;
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



