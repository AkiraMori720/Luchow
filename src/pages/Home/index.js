import React from 'react';
import * as S from './styles';
import Nft from './nft';
import qs from 'query-string';
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";

const SELECT_CATEGORIES = [
    {value: "1", text: 'Preminum'},
    {value: "2", text: 'Art'},
    {value: "3", text: 'Sports'},
    {value: "4", text: 'Entertainment'},
    {value: "5", text: 'Gaming'},
    {value: "6", text: 'Collectibles'},
    {value: "7", text: 'Esports'},
    {value: "8", text: 'NFT for Good'},
];

const SELECT_FILE_TYPES = [
    {value: 'image', text: 'Image'},
    {value: 'video', text: 'Video'},
    {value: 'audio', text: 'Audio'},
];

const SELECT_SALE_TYPES = [
    {value: 'fixed', text: 'Fixed Price'},
    {value: 'auction', text: 'Live Auction'}
];

const SELECT_CURRENCIES = [
    {value: 'BUSD', text: 'BUSD'},
    {value: 'ETH', text: 'ETH'},
    {value: 'BNB', text: 'BNB'}
];

const SELECT_ORDER_BY_ITEMS = [
    {value: 'recently', text: 'Recently listed'},
    {value: 'ending', text: 'Ending soon'},
    {value: 'price_low_high', text: 'Price low - high'},
    {value: 'price_high_low', text: 'Price high - low'},
    {value: 'most_favorited', text: 'Most favorited'},
];

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showFilter: false,
            filters: {
                categories: [],
                media_type: null,
                trade_type: null,
                currency: null,
                amountFrom: '',
                amountTo: '',
            },
            select_filters: null,
            keyword: '',
            order_by: 'recently',
            mainCategory: '',
            favourites: [],
            activeIndex: 2,
            topNfts: [
                {id: 1, type: 'image', bid_ends: '12:12:12', favourites: 1, title: 'Boston Punks 59', network: 'BSC', price: 130.00, unit: 'BUSD', usd: '129.97', thumbnail: 'https://public.nftstatic.com/static/nft/zipped/de5e3d1eddf040e998c80c9269506672_zipped.png', creator_name: 'RaviconArt'},
                {id: 2, type: 'image', bid_ends: '12:12:12', favourites: 1, title: 'Boston Punks 59', network: 'BSC', price: 130.00, unit: 'BUSD', usd: '129.97', thumbnail: 'https://public.nftstatic.com/static/nft/zipped/de5e3d1eddf040e998c80c9269506672_zipped.png', creator_name: 'RaviconArt'},
                {id: 3, type: 'image', bid_ends: '12:12:12', favourites: 1, title: 'Boston Punks 59', network: 'BSC', price: 130.00, unit: 'BUSD', usd: '129.97', thumbnail: 'https://public.nftstatic.com/static/nft/zipped/de5e3d1eddf040e998c80c9269506672_zipped.png', creator_name: 'RaviconArt'},
                {id: 4, type: 'image', bid_ends: '12:12:12', favourites: 1, title: 'Boston Punks 59', network: 'BSC', price: 130.00, unit: 'BUSD', usd: '129.97', thumbnail: 'https://public.nftstatic.com/static/nft/zipped/de5e3d1eddf040e998c80c9269506672_zipped.png', creator_name: 'RaviconArt'},
                {id: 5, type: 'image', bid_ends: '12:12:12', favourites: 1, title: 'Boston Punks 59', network: 'BSC', price: 130.00, unit: 'BUSD', usd: '129.97', thumbnail: 'https://public.nftstatic.com/static/nft/zipped/de5e3d1eddf040e998c80c9269506672_zipped.png', creator_name: 'RaviconArt'},
            ],
            nfts: [
                {id: 1, type: 'image', bid_ends: '12:12:12', favourites: 1, title: 'Boston Punks 59', network: 'BSC', price: 130.00, unit: 'BUSD', usd: '129.97', creator_avatar: 'https://public.nftstatic.com/static/nft/zipped/6e91fc4fb7e443508f0c30470d802760_zipped.jpeg', creator_name: 'RaviconArt'},
                {id: 2, type: 'image', bid_ends: '12:12:12', favourites: 1, title: 'Boston Punks 59', network: 'BSC', price: 130.00, unit: 'BUSD', usd: '129.97', creator_avatar: 'https://public.nftstatic.com/static/nft/zipped/6e91fc4fb7e443508f0c30470d802760_zipped.jpeg', creator_name: 'RaviconArt'},
                {id: 3, type: 'image', bid_ends: '12:12:12', favourites: 1, title: 'Boston Punks 59', network: 'BSC', price: 130.00, unit: 'BUSD', usd: '129.97', creator_avatar: 'https://public.nftstatic.com/static/nft/zipped/6e91fc4fb7e443508f0c30470d802760_zipped.jpeg', creator_name: 'RaviconArt'},
                {id: 4, type: 'image', bid_ends: '12:12:12', favourites: 1, title: 'Boston Punks 59', network: 'BSC', price: 130.00, unit: 'BUSD', usd: '129.97', creator_avatar: 'https://public.nftstatic.com/static/nft/zipped/6e91fc4fb7e443508f0c30470d802760_zipped.jpeg', creator_name: 'RaviconArt'},
                {id: 5, type: 'image', bid_ends: '12:12:12', favourites: 1, title: 'Boston Punks 59', network: 'BSC', price: 130.00, unit: 'BUSD', usd: '129.97', creator_avatar: 'https://public.nftstatic.com/static/nft/zipped/6e91fc4fb7e443508f0c30470d802760_zipped.jpeg', creator_name: 'RaviconArt'},
                {id: 6, type: 'image', bid_ends: '12:12:12', favourites: 1, title: 'Boston Punks 59', network: 'BSC', price: 130.00, unit: 'BUSD', usd: '129.97', creator_avatar: 'https://public.nftstatic.com/static/nft/zipped/6e91fc4fb7e443508f0c30470d802760_zipped.jpeg', creator_name: 'RaviconArt'},
                {id: 7, type: 'image', bid_ends: '12:12:12', favourites: 1, title: 'Boston Punks 59', network: 'BSC', price: 130.00, unit: 'BUSD', usd: '129.97', creator_avatar: 'https://public.nftstatic.com/static/nft/zipped/6e91fc4fb7e443508f0c30470d802760_zipped.jpeg', creator_name: 'RaviconArt'},
                {id: 8, type: 'image', bid_ends: '12:12:12', favourites: 1, title: 'Boston Punks 59', network: 'BSC', price: 130.00, unit: 'BUSD', usd: '129.97', creator_avatar: 'https://public.nftstatic.com/static/nft/zipped/6e91fc4fb7e443508f0c30470d802760_zipped.jpeg', creator_name: 'RaviconArt'},
                {id: 9, type: 'image', bid_ends: '12:12:12', favourites: 1, title: 'Boston Punks 59', network: 'BSC', price: 130.00, unit: 'BUSD', usd: '129.97', creator_avatar: 'https://public.nftstatic.com/static/nft/zipped/6e91fc4fb7e443508f0c30470d802760_zipped.jpeg', creator_name: 'RaviconArt'},
                {id: 10, type: 'image', bid_ends: '12:12:12', favourites: 1, title: 'Boston Punks 59', network: 'BSC', price: 130.00, unit: 'BUSD', usd: '129.97', creator_avatar: 'https://public.nftstatic.com/static/nft/zipped/6e91fc4fb7e443508f0c30470d802760_zipped.jpeg', creator_name: 'RaviconArt'},
                {id: 12, type: 'image', bid_ends: '12:12:12', favourites: 1, title: 'Boston Punks 59', network: 'BSC', price: 130.00, unit: 'BUSD', usd: '129.97', creator_avatar: 'https://public.nftstatic.com/static/nft/zipped/6e91fc4fb7e443508f0c30470d802760_zipped.jpeg', creator_name: 'RaviconArt'},
                {id: 13, type: 'image', bid_ends: '12:12:12', favourites: 1, title: 'Boston Punks 59', network: 'BSC', price: 130.00, unit: 'BUSD', usd: '129.97', creator_avatar: 'https://public.nftstatic.com/static/nft/zipped/6e91fc4fb7e443508f0c30470d802760_zipped.jpeg', creator_name: 'RaviconArt'},
                {id: 14, type: 'image', bid_ends: '12:12:12', favourites: 1, title: 'Boston Punks 59', network: 'BSC', price: 130.00, unit: 'BUSD', usd: '129.97', creator_avatar: 'https://public.nftstatic.com/static/nft/zipped/6e91fc4fb7e443508f0c30470d802760_zipped.jpeg', creator_name: 'RaviconArt'},
                {id: 15, type: 'image', bid_ends: '12:12:12', favourites: 1, title: 'Boston Punks 59', network: 'BSC', price: 130.00, unit: 'BUSD', usd: '129.97', creator_avatar: 'https://public.nftstatic.com/static/nft/zipped/6e91fc4fb7e443508f0c30470d802760_zipped.jpeg', creator_name: 'RaviconArt'},
            ],
            isMounted: false
        };

        this.init();
    }

    componentDidMount() {
        this.setState({isMounted: true});
    }

    init = () => {
        const filters = qs.parse(this.props.location.search);
        const init_filters = {
            categories: filters.categories?(typeof(filters.categories) === 'string'?[filters.categories]:filters.categories):[],
            media_type: filters.media_type??null,
            trade_type: filters.trade_type??null,
            currency: filters.currency??null,
            amountFrom: filters.amountFrom??'',
            amountTo: filters.amountTo??'',
        };

        if(this.state.isMounted){
            this.setState({
                filters : init_filters,
                select_filters : this.props.location.search?Object.assign({}, init_filters):null,
                keyword : filters.keyword??'',
                order_by : filters.order_by??'recently',
            });
        } else {
            this.state.filters = init_filters;
            this.state.select_filters = this.props.location.search?Object.assign({}, init_filters):null;
            this.state.keyword = filters.keyword??'';
            this.state.order_by = filters.order_by??'recently';
        }

        console.log('filters', filters, this.props.location.search);

    }

    toggleFilter = (key, value, multi = false) => {
        const {filters} = this.state;
        if(multi){
            if(filters[key].includes(value)){
                filters[key] = filters[key].filter(c => c !== value);
            } else {
                filters[key] = [...filters[key], value];
            }
        } else {
            filters[key] = value;
        }
        this.setState({filters});
    }

    onOpenDetail = (item) => {
        this.props.history.push('/detail');
    }

    onToggleFavourite = (id) => {
        if(this.state.favourites.includes(id)){
            this.setState({favourites: this.state.favourites.filter(f => f !== id)});
        } else {
            this.setState({favourites: [...this.state.favourites, id]});
        }
    }

    onSetFilter = () => {
        this.setState({showFilter: false});
        const query = qs.stringify(
            {...this.state.filters, order_by: this.state.order_by, keyword: this.state.keyword}
        );
        this.props.history.replace({
            pathname: '/',
            search: query
        });
        setTimeout(() => this.init());
    }

    removeFilter = (key, value = false) => {
        const {filters} = this.state;
        if(value){
            filters[key] = filters[key].filter(v => v !== value);
        } else {
            filters[key] = null;
        }

        if(filters.categories.length === 0 && !filters.media_type && !filters.trade_type && !filters.currency){
            return this.onClearAll();
        }

        this.setState({filters, select_filters: filters});
        this.onSetFilter();
    }

    onClearAll = () => {
        this.setState({ select_filters:null });
        this.props.history.replace('/');
        setTimeout(() => this.init());
    }

    render() {
        const {showFilter, filters, select_filters, mainCategory, topNfts, nfts, order_by, favourites, activeIndex} = this.state;
        const slides = topNfts.map((n, index) => {
            return <S.SlideContainer className={`slider_index_${index} slider_` + Math.abs(activeIndex - index) + (activeIndex > index?'-1': '')} onMouseEnter={() => {
                    console.log('click', index);
                    this.setState({activeIndex: index});
                }}>
                    <img src={n.thumbnail} alt={n.id}/>
                    <S.SlideInfo>
                        <div className={'title'}>{n.title}</div>
                        <div className={'bottomInfo'}>
                            <div className={"createName"}>{n.creator_name}</div>
                            <div className={"bidTimeContainer"}>
                                <div className={"bidTime"}>00</div>:<div className={"bidTime"}>00</div>:<div className={"bidTime"}>00</div>:<div className={"bidTime"}>00</div>
                            </div>
                        </div>
                    </S.SlideInfo>
                    <div className={"backCover"}/>
                </S.SlideContainer>

        });
        return (
            <S.Container>
                <S.Container>
                    <S.Header>
                        {slides}
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
                                <S.SearchInput value={this.state.keyword} placeholder="Search items, creators" onChange={event => this.setState({keyword: event.target.value})} onKeyDown={event => {
                                    if (event.key === 'Enter')
                                        this.onSetFilter();
                                }}/>
                                <S.SearchIcon size={24}/>
                            </S.SearchContainer>
                            <S.OrderBy name={"order_by"} defaultValue={order_by} onChange={event => {
                                this.setState({order_by: event.target.value});
                                this.onSetFilter();
                            }}>
                                {
                                    SELECT_ORDER_BY_ITEMS.map(o => <S.OrderByOption key={o.value} value={o.value}>{o.text}</S.OrderByOption>)
                                }
                            </S.OrderBy>
                        </S.FilterRight>
                        {
                            showFilter &&
                            <S.FilterContent>
                                <S.FilterCategoryContainer>
                                    <S.FilterLabel>Categories: </S.FilterLabel>
                                    <S.FilterCategories>
                                        {
                                            SELECT_CATEGORIES.map((c, index) => <S.FilterCategory key={index} onClick={() => this.toggleFilter("categories", c.value, true)} className={filters.categories.includes(c.value)?'active':''}>{c.text}</S.FilterCategory>)
                                        }
                                    </S.FilterCategories>
                                </S.FilterCategoryContainer>
                                <S.FilterCategoryContainer>
                                    <S.FilterLabel>File Types: </S.FilterLabel>
                                    <S.FilterCategories>
                                        {
                                            SELECT_FILE_TYPES.map((c, index) => <S.FilterCategory key={index} onClick={() => this.toggleFilter("media_type", c.value)} className={filters.media_type === c.value?'active':''}>{c.text}</S.FilterCategory>)
                                        }
                                    </S.FilterCategories>
                                </S.FilterCategoryContainer>
                                <S.FilterCategoryContainer>
                                    <S.FilterLabel>Sale Types: </S.FilterLabel>
                                    <S.FilterCategories>
                                        {
                                            SELECT_SALE_TYPES.map((c, index) => <S.FilterCategory key={index} onClick={() => this.toggleFilter("trade_type", c.value)} className={filters.trade_type === c.value?'active':''}>{c.text}</S.FilterCategory>)
                                        }
                                    </S.FilterCategories>
                                </S.FilterCategoryContainer>
                                <S.FilterFooter>
                                    <S.FilterCurrencyContainer>
                                        <S.FilterLabel>Currencies: </S.FilterLabel>
                                        <S.FilterCurrencies>
                                            {
                                                SELECT_CURRENCIES.map((c, index) =>
                                                    <S.FilterCurrency key={index} onClick={() => this.toggleFilter("currency", c.value)} className={filters.currency === c.value?'active':''}>
                                                        {
                                                            filters.currency === c.value ?
                                                                <S.DotCircleIcon size={16} color={'#F0B90B'}/>
                                                                :<S.CircleIcon size={16} color={'grey'}/>
                                                        }
                                                        {c.text}
                                                    </S.FilterCurrency>)
                                            }
                                        </S.FilterCurrencies>
                                        {
                                            filters.currency &&
                                            <S.CurrencyPrices>
                                                <S.CurrencyInputContainer><S.CurrencyInput type={"number"} value={filters.amountFrom} placeholder="BNB Price" onChange={event => this.toggleFilter('amountFrom', event.target.value)}/></S.CurrencyInputContainer>
                                                <S.CurrencyInputDivider>-</S.CurrencyInputDivider>
                                                <S.CurrencyInputContainer><S.CurrencyInput type={"number"} value={filters.amountTo} placeholder="BNB Price" onChange={event => this.toggleFilter('amountTo', event.target.value)}/></S.CurrencyInputContainer>
                                            </S.CurrencyPrices>
                                        }
                                    </S.FilterCurrencyContainer>
                                    <S.FilterActionBtn onClick={this.onSetFilter}>Ok</S.FilterActionBtn>
                                </S.FilterFooter>
                            </S.FilterContent>
                        }
                    </S.Filter>
                    {
                        select_filters &&
                        <S.FilterString>
                            {
                                select_filters.categories.length > 0 &&
                                    <S.FilterStringItem>
                                        <label>Categories: </label>
                                        <S.FilterValues>
                                            {
                                                select_filters.categories.map((c, index) => <S.FilterValue key={index} onClick={() => this.toggleFilter("categories", c, true)}>
                                                    {(SELECT_CATEGORIES.find(t => t.value == c))?.text??''}
                                                    <S.RemoveIcon size={12} onClick={() => this.removeFilter("categories", c)}/>
                                                </S.FilterValue>)
                                            }
                                        </S.FilterValues>
                                    </S.FilterStringItem>
                            }
                            {
                                select_filters.media_type &&
                                <S.FilterStringItem>
                                    <label>File Type: </label>
                                    <S.FilterValue>{SELECT_FILE_TYPES.find(t => t.value === select_filters.media_type)?.text??''}<S.RemoveIcon size={12} onClick={() => this.removeFilter("media_type")}/></S.FilterValue>
                                </S.FilterStringItem>
                            }
                            {
                                select_filters.trade_type &&
                                <S.FilterStringItem>
                                    <label>Sale Type: </label>
                                    <S.FilterValue>{SELECT_SALE_TYPES.find(t => t.value === select_filters.trade_type)?.text??''}<S.RemoveIcon size={12} onClick={() => this.removeFilter("trade_type")}/></S.FilterValue>
                                </S.FilterStringItem>
                            }
                            {
                                select_filters.currency &&
                                <S.FilterStringItem>
                                    <label>Currency: </label>
                                    <S.FilterValue>{SELECT_CURRENCIES.find(t => t.value === select_filters.currency)?.text??''} {select_filters.amountFrom} - {select_filters.amountTo}<S.RemoveIcon size={12} onClick={() => this.removeFilter("currency")}/></S.FilterValue>
                                </S.FilterStringItem>
                            }
                            <S.FilterClearAll onClick={() => this.onClearAll()}>
                                clear all
                            </S.FilterClearAll>
                        </S.FilterString>
                    }
                    <S.Nfts>
                        {
                            nfts.map((n, index) => <Nft key={n.id} {...n} onOpen={() => this.onOpenDetail(n)} isFavourite={favourites.includes(n.id)} toggle={() => this.onToggleFavourite(n.id)}/>)
                        }
                    </S.Nfts>
                </S.Container>
            </S.Container>
        );
    }
}

export default Home;
