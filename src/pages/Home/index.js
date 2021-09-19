import React from 'react';
import * as S from './styles';
import Nft from './nft';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showFilter: false,
            categories: [],
            currency: 'BNB',
            mainCategory: '',
            nfts: [
                {type: 'image', bid_ends: '12:12:12', favourites: 1, title: 'Boston Punks 59', network: 'BSC', price: 130.00, unit: 'BUSD', usd: '129.97', creator_avatar: 'https://public.nftstatic.com/static/nft/zipped/6e91fc4fb7e443508f0c30470d802760_zipped.jpeg', creator_name: 'RaviconArt'},
                {type: 'image', bid_ends: '12:12:12', favourites: 1, title: 'Boston Punks 59', network: 'BSC', price: 130.00, unit: 'BUSD', usd: '129.97', creator_avatar: 'https://public.nftstatic.com/static/nft/zipped/6e91fc4fb7e443508f0c30470d802760_zipped.jpeg', creator_name: 'RaviconArt'},
                {type: 'image', bid_ends: '12:12:12', favourites: 1, title: 'Boston Punks 59', network: 'BSC', price: 130.00, unit: 'BUSD', usd: '129.97', creator_avatar: 'https://public.nftstatic.com/static/nft/zipped/6e91fc4fb7e443508f0c30470d802760_zipped.jpeg', creator_name: 'RaviconArt'},
                {type: 'image', bid_ends: '12:12:12', favourites: 1, title: 'Boston Punks 59', network: 'BSC', price: 130.00, unit: 'BUSD', usd: '129.97', creator_avatar: 'https://public.nftstatic.com/static/nft/zipped/6e91fc4fb7e443508f0c30470d802760_zipped.jpeg', creator_name: 'RaviconArt'},
                {type: 'image', bid_ends: '12:12:12', favourites: 1, title: 'Boston Punks 59', network: 'BSC', price: 130.00, unit: 'BUSD', usd: '129.97', creator_avatar: 'https://public.nftstatic.com/static/nft/zipped/6e91fc4fb7e443508f0c30470d802760_zipped.jpeg', creator_name: 'RaviconArt'},
                {type: 'image', bid_ends: '12:12:12', favourites: 1, title: 'Boston Punks 59', network: 'BSC', price: 130.00, unit: 'BUSD', usd: '129.97', creator_avatar: 'https://public.nftstatic.com/static/nft/zipped/6e91fc4fb7e443508f0c30470d802760_zipped.jpeg', creator_name: 'RaviconArt'},
                {type: 'image', bid_ends: '12:12:12', favourites: 1, title: 'Boston Punks 59', network: 'BSC', price: 130.00, unit: 'BUSD', usd: '129.97', creator_avatar: 'https://public.nftstatic.com/static/nft/zipped/6e91fc4fb7e443508f0c30470d802760_zipped.jpeg', creator_name: 'RaviconArt'},
                {type: 'image', bid_ends: '12:12:12', favourites: 1, title: 'Boston Punks 59', network: 'BSC', price: 130.00, unit: 'BUSD', usd: '129.97', creator_avatar: 'https://public.nftstatic.com/static/nft/zipped/6e91fc4fb7e443508f0c30470d802760_zipped.jpeg', creator_name: 'RaviconArt'},
                {type: 'image', bid_ends: '12:12:12', favourites: 1, title: 'Boston Punks 59', network: 'BSC', price: 130.00, unit: 'BUSD', usd: '129.97', creator_avatar: 'https://public.nftstatic.com/static/nft/zipped/6e91fc4fb7e443508f0c30470d802760_zipped.jpeg', creator_name: 'RaviconArt'},
                {type: 'image', bid_ends: '12:12:12', favourites: 1, title: 'Boston Punks 59', network: 'BSC', price: 130.00, unit: 'BUSD', usd: '129.97', creator_avatar: 'https://public.nftstatic.com/static/nft/zipped/6e91fc4fb7e443508f0c30470d802760_zipped.jpeg', creator_name: 'RaviconArt'},
                {type: 'image', bid_ends: '12:12:12', favourites: 1, title: 'Boston Punks 59', network: 'BSC', price: 130.00, unit: 'BUSD', usd: '129.97', creator_avatar: 'https://public.nftstatic.com/static/nft/zipped/6e91fc4fb7e443508f0c30470d802760_zipped.jpeg', creator_name: 'RaviconArt'},
                {type: 'image', bid_ends: '12:12:12', favourites: 1, title: 'Boston Punks 59', network: 'BSC', price: 130.00, unit: 'BUSD', usd: '129.97', creator_avatar: 'https://public.nftstatic.com/static/nft/zipped/6e91fc4fb7e443508f0c30470d802760_zipped.jpeg', creator_name: 'RaviconArt'},
                {type: 'image', bid_ends: '12:12:12', favourites: 1, title: 'Boston Punks 59', network: 'BSC', price: 130.00, unit: 'BUSD', usd: '129.97', creator_avatar: 'https://public.nftstatic.com/static/nft/zipped/6e91fc4fb7e443508f0c30470d802760_zipped.jpeg', creator_name: 'RaviconArt'},
                {type: 'image', bid_ends: '12:12:12', favourites: 1, title: 'Boston Punks 59', network: 'BSC', price: 130.00, unit: 'BUSD', usd: '129.97', creator_avatar: 'https://public.nftstatic.com/static/nft/zipped/6e91fc4fb7e443508f0c30470d802760_zipped.jpeg', creator_name: 'RaviconArt'},
            ],
            order_by: 'recently'
        };
    }

    toggleCategory = (category) => {
        const {categories} = this.state;
        if(categories.includes(category)){
            this.setState({categories: categories.filter(c => c !== category)});
        } else {
            this.setState({categories: [...categories, category]});
        }
    }

    onOpenDetail = (item) => {
        this.props.history.push('/detail');
    }

    render() {
        const {showFilter, categories, currency, mainCategory, nfts, order_by} = this.state;
        return (
            <S.Container>
                <S.Container>
                    <S.Header>

                    </S.Header>
                    <S.Filter>
                        <S.FilterLeft>
                            <S.FilterBtn onClick={() => this.setState({showFilter: !showFilter})}>
                                <S.FilterAltIcon size={24}/>
                                Filters
                            </S.FilterBtn>
                            <S.Categories>
                                <S.Category onClick={() => this.setState({mainCategory: 'Lucky Doge'})} className={mainCategory === 'Lucky Doge'?'active':''}>🔥 Lucky Doge</S.Category>
                                <S.Category onClick={() => this.setState({mainCategory: 'ROK'})} className={mainCategory === 'ROK'?'active':''}>🔥 ROK</S.Category>
                                <S.Category onClick={() => this.setState({mainCategory: 'Zootopia'})} className={mainCategory === 'Zootopia'?'active':''}>🔥 Zootopia</S.Category>
                            </S.Categories>
                        </S.FilterLeft>
                        <S.FilterRight>
                            <S.SearchContainer>
                                <S.SearchInput placeholder="Search items, creators"/>
                                <S.SearchIcon size={24}/>
                            </S.SearchContainer>
                            <S.OrderBy name={"order_by"} defaultValue={order_by} onChange={value => this.setState({order_by: value})}>
                                <S.OrderByOption value={"recently"}>Recently Listed</S.OrderByOption>
                                <S.OrderByOption value={"ending"}>Ending soon</S.OrderByOption>
                                <S.OrderByOption value={"price_low"}>Price low - high</S.OrderByOption>
                            </S.OrderBy>
                        </S.FilterRight>
                        {
                            showFilter &&
                            <S.FilterContent>
                                <S.FilterCategoryContainer>
                                    <S.FilterLabel>Categories: </S.FilterLabel>
                                    <S.FilterCategories>
                                        <S.FilterCategory onClick={() => this.toggleCategory("Premium")} className={categories.includes("Premium")?'active':''}>Premium</S.FilterCategory>
                                        <S.FilterCategory onClick={() => this.toggleCategory("Sports")} className={categories.includes("Sports")?'active':''}>Sports</S.FilterCategory>
                                    </S.FilterCategories>
                                    <S.FilterClearAll onClick={() => this.setState({categories: []})}>
                                        clear all
                                    </S.FilterClearAll>
                                </S.FilterCategoryContainer>
                                <S.FilterCurrencyContainer>
                                    <S.FilterLabel>Currencies: </S.FilterLabel>
                                    <S.FilterCurrencies>
                                        <S.FilterCurrency onClick={() => this.setState({currency: "BNB"})} className={currency === 'BNB'?'active':''}>BNB</S.FilterCurrency>
                                        <S.FilterCurrency onClick={() => this.setState({currency: "ETH"})} className={currency === 'ETH'?'active':''}>ETH</S.FilterCurrency>
                                        <S.FilterCurrency onClick={() => this.setState({currency: "BUSD"})} className={currency === 'BUSD'?'active':''}>BUSD</S.FilterCurrency>
                                    </S.FilterCurrencies>
                                </S.FilterCurrencyContainer>
                            </S.FilterContent>
                        }
                    </S.Filter>
                    <S.Nfts>
                        {
                            nfts.map((n, index) => <Nft key={index} {...n} onOpen={() => this.onOpenDetail(n)}/>)
                        }
                    </S.Nfts>
                </S.Container>
            </S.Container>
        );
    }


};

export default Home;
