import React from "react";
import History from "./history";
import Provenance from "./provenance";
import * as S from "./styles";
import Modal from "react-modal";
import DatePicker from 'react-datepicker'

import "react-datepicker/dist/react-datepicker.css";

class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            curTab: 'history',
            type: 'image',
            address: '0xEe6ba59e48Fc0fc00D681099020E93d380E5c4c9',
            network: 'BSC',
            token_id: 2021,
            title: 'Paragon #2021',
            category: 'Gaming',
            favourites: 6,
            creator_avatar: '/images/profile.png',
            creator_name: 'Weedbits',
            caption: 'This is Paragon, the promised land hidden in the Ethereal Void. Magic, dungeons, factions, magnificent creatures and beings, this is a whole new metaverse! Are you ready to be a great warrior, a wise sage, or a talented bard? What you can do here is unlimited. The time has come, go trace your dream and seize your wealth, discover this mysterious land and build it with your own',
            owner_avatar: '/images/profile.png',
            owner_name: 'Anonymous_ngql',
            price: 208.928,
            unit: 'BUSD',
            usd: 208.89,
            histories: [
                {name: 'Anonymous_kz0y', time: '55 mins ago', price: 208.928, usd: 208.89, unit: 'BUSD'},
                {name: 'Anonymous_kz0y', time: '55 mins ago', price: 208.928, usd: 208.89, unit: 'BUSD'},
                {name: 'Anonymous_kz0y', time: '55 mins ago', price: 208.928, usd: 208.89, unit: 'BUSD'},
                {name: 'Anonymous_kz0y', time: '55 mins ago', price: 208.928, usd: 208.89, unit: 'BUSD'},
                {name: 'Anonymous_kz0y', time: '55 mins ago', price: 208.928, usd: 208.89, unit: 'BUSD'},
                {name: 'Anonymous_kz0y', time: '55 mins ago', price: 208.928, usd: 208.89, unit: 'BUSD'},
                {name: 'Anonymous_kz0y', time: '55 mins ago', price: 208.928, usd: 208.89, unit: 'BUSD'},
                {name: 'Anonymous_kz0y', time: '55 mins ago', price: 208.928, usd: 208.89, unit: 'BUSD'}
            ],
            provenances: [
                {name: 'Anonymous_kz0y', time: '2021-09-16 21:32:45'},
                {name: 'Anonymous_kz0y', time: '2021-09-16 21:32:45'},
                {name: 'Anonymous_kz0y', time: '2021-09-16 21:32:45'},
                {name: 'Anonymous_kz0y', time: '2021-09-16 21:32:45'},
                {name: 'Anonymous_kz0y', time: '2021-09-16 21:32:45'},
                {name: 'Anonymous_kz0y', time: '2021-09-16 21:32:45'},
                {name: 'Anonymous_kz0y', time: '2021-09-16 21:32:45'},
                {name: 'Anonymous_kz0y', time: '2021-09-16 21:32:45'},
                {name: 'Anonymous_kz0y', time: '2021-09-16 21:32:45'},
                {name: 'Anonymous_kz0y', time: '2021-09-16 21:32:45'}
            ],
            showPlaceBidModal: false,
            showBuyNowModal: false,
            showPutMarketPlace: true,
            put_type: 'timed',
            put_price: 0,
            starting_date: 'after',
            expiration_date: "1",
            starting_date_value: null,
            expiration_date_value: null,
        }
    }

    onPlaceBid = () => {
        this.setState({showPlaceBidModal: true});
    }

    onBuyNow = () => {
        this.setState({showBuyNowModal: true});
    }

    onPutMarketPlace = () => {
        this.setState({showPutMarketPlace: true});
    }

    render() {
        const {
            type,
            address,
            network,
            token_id,
            title,
            category,
            favourites,
            creator_avatar,
            creator_name,
            caption,
            owner_avatar,
            owner_name,
            price,
            unit,
            usd,
            curTab,
            histories,
            provenances,
            showPlaceBidModal,
            showBuyNowModal,
            showPutMarketPlace,
            put_type,
            put_price,
            starting_date,
            expiration_date,
            starting_date_value,
            expiration_date_value,
        } = this.state;
        return (
            <S.Container>
                <S.ImageContainer>
                    <S.NftImage
                        src={"https://public.nftstatic.com/static/nft/zipped/de5e3d1eddf040e998c80c9269506672_zipped.png"}/>
                    <S.NftType>
                        {type}
                    </S.NftType>
                    <S.AddressContainer>
                        <S.label>Contract Address</S.label>
                        <S.Address>
                            <S.NftAddress
                                href={"https://bscscan.com/address/0xEe6ba59e48Fc0fc00D681099020E93d380E5c4c9"}
                                target={"_blank"}>{address}</S.NftAddress>
                            <S.NftNetwork>{network}</S.NftNetwork>
                        </S.Address>
                    </S.AddressContainer>
                    <S.TokenIdContainer>
                        <S.label>Token ID</S.label>
                        <S.TokenId>{token_id}</S.TokenId>
                    </S.TokenIdContainer>
                </S.ImageContainer>
                <S.DetailContainer>
                    <S.Header>
                        <S.HeaderLeft>
                            <S.NftTitle>{title}</S.NftTitle>
                            <S.NftCategory>{category}</S.NftCategory>
                        </S.HeaderLeft>
                        <S.HeaderRight>
                            <S.Favorite>
                                <S.LoveIcon size={20}/>
                                <S.FavouritesCount>{favourites}</S.FavouritesCount>
                            </S.Favorite>
                            <S.ShareIcon size={24}/>
                        </S.HeaderRight>
                    </S.Header>
                    <S.Collection>
                        <S.CollectionCaption>Collection</S.CollectionCaption>
                        <S.CollectionContainer>
                            <S.CollectionImage src={"/images/erc721.png"}/>
                            <S.CollectionTitle>Million Dollar Rat</S.CollectionTitle>
                        </S.CollectionContainer>
                    </S.Collection>
                    <S.OwnerContainer>
                        <S.Owners>
                            <S.Owner>
                                <S.CreatorImage src={creator_avatar}/>
                                <S.CreatorContent>
                                    <S.OptionText>Creator</S.OptionText>
                                    <S.CreatorName>{creator_name}</S.CreatorName>
                                </S.CreatorContent>
                            </S.Owner>
                            <S.Owner>
                                <S.CreatorImage src={owner_avatar}/>
                                <S.CreatorContent>
                                    <S.OptionText>Creator</S.OptionText>
                                    <S.CreatorName>{owner_name}</S.CreatorName>
                                </S.CreatorContent>
                            </S.Owner>
                        </S.Owners>
                        <S.Caption>
                            {caption}
                        </S.Caption>
                    </S.OwnerContainer>
                    <S.StatusContainer>
                        <S.CurrentBid>
                            <S.OptionText>Price</S.OptionText>
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
                        <S.BidTime>
                            <S.OptionText>Ends in</S.OptionText>
                            <S.Times>
                                <S.Time>
                                    <S.TimeValue>00</S.TimeValue>
                                    <S.TimeLabel>Days</S.TimeLabel>
                                </S.Time>
                                <S.Time>
                                    <S.TimeValue>00</S.TimeValue>
                                    <S.TimeLabel>Hours</S.TimeLabel>
                                </S.Time>
                                <S.Time>
                                    <S.TimeValue>00</S.TimeValue>
                                    <S.TimeLabel>Mins</S.TimeLabel>
                                </S.Time>
                                <S.Time>
                                    <S.TimeValue>00</S.TimeValue>
                                    <S.TimeLabel>Secs</S.TimeLabel>
                                </S.Time>
                            </S.Times>
                        </S.BidTime>
                    </S.StatusContainer>
                    <S.ActionContainer>
                        <S.Action onClick={() => this.onPlaceBid()}>Place a Bid</S.Action>
                        <S.Action onClick={() => this.onBuyNow()}>Buy Now</S.Action>
                        <S.Action onClick={() => this.onPutMarketPlace()}>Put on marketplace</S.Action>
                    </S.ActionContainer>
                    <S.Others>
                        <S.TabHeader>
                            <S.Tab onClick={()=>this.setState({curTab: 'history'})} className={curTab==='history'?'active':''}>Bid History</S.Tab>
                            <S.Tab onClick={()=>this.setState({curTab: 'provenance'})} className={curTab==='provenance'?'active':''}>Provenance</S.Tab>
                        </S.TabHeader>
                        <S.TabContent>
                            {
                                curTab === 'history' &&
                                    <S.TabContentContainer>
                                        <S.InfoList>
                                            {
                                                histories.map((h, index) => <History key={index} {...h} />)
                                            }
                                        </S.InfoList>
                                        <S.ViewMore>
                                            <S.MoreText>View More</S.MoreText>
                                        </S.ViewMore>
                                    </S.TabContentContainer>
                            }
                            {
                                curTab === 'provenance' &&
                                <S.TabContentContainer>
                                    <S.InfoList>
                                        {
                                            provenances.map((h, index) => <Provenance key={index} {...h} />)
                                        }
                                    </S.InfoList>
                                    <S.ViewMore>
                                        <S.MoreText>View More</S.MoreText>
                                    </S.ViewMore>
                                </S.TabContentContainer>
                            }
                        </S.TabContent>
                    </S.Others>
                </S.DetailContainer>
                <Modal
                    isOpen={showPlaceBidModal}
                    onRequestClose={() => this.setState({showPlaceBidModal: false})}
                    ariaHideApp={false}
                    style={{
                        overlay: {
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(60, 37, 53, 0.25)',
                            zIndex: 99,
                        },
                        content: {
                            top: '50%',
                            left: '50%',
                            right: 'auto',
                            bottom: 'auto',
                            marginRight: '-50%',
                            transform: 'translate(-50%, -50%)',
                            width: '100%',
                            maxWidth: '500px',
                            borderRadius: '20px',
                            zIndex: 9999
                        },
                    }}
                >
                    <S.ModalBody>
                        <S.ModalHeader>
                            <S.ModalCloseIcon size={32} onClick={() => this.setState({showPlaceBidModal: false})}/>
                        </S.ModalHeader>
                        <S.ModalTitle>Your Bid</S.ModalTitle>
                        <S.ModalRow>
                            <S.ModalLabel>Current bid</S.ModalLabel>
                            <S.ModalPrice>110.938 BUSD</S.ModalPrice>
                        </S.ModalRow>
                        <S.BidPrice>
                            <S.ModalLabel>Current bid</S.ModalLabel>
                            <S.ModalMainPrice>{price}</S.ModalMainPrice>
                            <S.UnitContainer>
                                <S.CoinImage src={"/images/erc721.png"}/>
                                <S.Unit>{unit}</S.Unit>
                            </S.UnitContainer>
                        </S.BidPrice>
                        <S.BidUsd>
                            ≈ $ 112.90
                        </S.BidUsd>
                        <S.ModalRow>
                            <S.ModalLabel>Available</S.ModalLabel>
                            <S.ModalPrice>0.049738 BUSD</S.ModalPrice>
                        </S.ModalRow>
                        <S.ModalAction>
                            <S.ModalButton onClick={() => this.setState({showCreateCollectionDlg: false})}>Place a Bid</S.ModalButton>
                        </S.ModalAction>
                    </S.ModalBody>
                </Modal>
                <Modal
                    isOpen={showBuyNowModal}
                    onRequestClose={() => this.setState({showBuyNowModal: false})}
                    ariaHideApp={false}
                    style={{
                        overlay: {
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(60, 37, 53, 0.25)',
                            zIndex: 99,
                        },
                        content: {
                            top: '50%',
                            left: '50%',
                            right: 'auto',
                            bottom: 'auto',
                            marginRight: '-50%',
                            transform: 'translate(-50%, -50%)',
                            width: '100%',
                            maxWidth: '500px',
                            borderRadius: '20px',
                            zIndex: 9999
                        },
                    }}
                >
                    <S.ModalBody>
                        <S.ModalHeader>
                            <S.ModalCloseIcon size={32} onClick={() => this.setState({showBuyNowModal: false})}/>
                        </S.ModalHeader>
                        <S.ModalTitle>
                            <S.InfoImage src={"/images/erc721.png"}/>
                            <S.ModalLabel>You will pay</S.ModalLabel>
                            <S.PayAmount>
                                <S.CoinImage src={"/images/erc721.png"}/>
                                <S.Price>50</S.Price>
                                <S.Unit>{unit}</S.Unit>
                            </S.PayAmount>
                            <S.BidUsd>
                                ≈ $ 112.90
                            </S.BidUsd>
                        </S.ModalTitle>
                        <S.ModalInfoContent>
                            <S.InfoRow>
                                <S.InfoIcon size={24} />
                                <S.InfoLabel>Don`t have enough crypto?</S.InfoLabel>
                            </S.InfoRow>
                            <S.InfoRow>
                                <S.InfoActionLabel onClick={() => {}}>Buy Crypto/Deposit ></S.InfoActionLabel>
                            </S.InfoRow>
                        </S.ModalInfoContent>
                        <S.ModalRow>
                            <S.ModalLabel>Available</S.ModalLabel>
                            <S.ModalPrice>0.049738 BUSD</S.ModalPrice>
                        </S.ModalRow>
                        <S.ModalActions>
                            <S.ModalCancelButton onClick={() => this.setState({showBuyNowModal: false})}>Cancel</S.ModalCancelButton>
                            <S.ModalSubmitButton onClick={() => this.setState({showBuyNowModal: false})}>Confirm</S.ModalSubmitButton>
                        </S.ModalActions>
                    </S.ModalBody>
                </Modal>
                <Modal
                    isOpen={showPutMarketPlace}
                    onRequestClose={() => this.setState({showPutMarketPlace: false})}
                    ariaHideApp={false}
                    style={{
                        overlay: {
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(60, 37, 53, 0.25)',
                            zIndex: 99,
                        },
                        content: {
                            top: '50%',
                            left: '50%',
                            right: 'auto',
                            bottom: 'auto',
                            marginRight: '-50%',
                            transform: 'translate(-50%, -50%)',
                            width: '100%',
                            maxWidth: '500px',
                            borderRadius: '20px',
                            zIndex: 9999
                        },
                    }}
                >
                    <S.ModalBody>
                        <S.ModalHeader>
                            <S.ModalCloseIcon size={32} onClick={() => this.setState({showPutMarketPlace: false})}/>
                        </S.ModalHeader>
                        <S.ModalTitle>Put on Marketplace</S.ModalTitle>
                        <S.PutTypes>
                            <S.PutType onClick={() => this.setState({put_type: 'fixed'})} className={put_type === 'fixed'?'active':''}>
                                <S.FixedIcon size={32}/>
                                <S.TypeLabel>Fixed price</S.TypeLabel>
                            </S.PutType>
                            <S.PutType onClick={() => this.setState({put_type: 'timed'})} className={put_type === 'timed'?'active':''}>
                                <S.TimeIcon size={36}/>
                                <S.TypeLabel>Timed auction</S.TypeLabel>
                            </S.PutType>
                        </S.PutTypes>
                        {
                            put_type === 'fixed' &&
                            <S.Field>
                                <S.label>Price</S.label>
                                <S.InputContainer>
                                    <S.Input placeholder={"Enter Price"} value={put_price} onChange={value => this.setState({put_price: value})}/>
                                    <S.InputUnit>LUCHOW</S.InputUnit>
                                </S.InputContainer>
                            </S.Field>
                        }
                        {
                            put_type === 'timed' &&
                            <>
                                <S.Field>
                                    <S.label>Minimum bid</S.label>
                                    <S.InputContainer>
                                        <S.Input placeholder={"Enter minimum bid"} value={put_price} onChange={value => this.setState({put_price: value})}/>
                                        <S.InputUnit>LUCHOW</S.InputUnit>
                                    </S.InputContainer>
                                </S.Field>
                                <S.SelectRow>
                                    <S.SelectField>
                                        <S.label>Minimum bid</S.label>
                                        <S.StartingDateSelect name={"starting_date"} defaultValue={starting_date} onChange={event => this.setState({starting_date: event.target.value})}>
                                            <S.OrderByOption value={"after"}>Right after listing</S.OrderByOption>
                                            <S.OrderByOption value={"specific"}>Pick specific date</S.OrderByOption>
                                        </S.StartingDateSelect>
                                        {
                                            starting_date === "specific" &&
                                            <DatePicker
                                                selected={starting_date_value}
                                                onChange={value => this.setState({starting_date_value: value})}
                                                className={"input-picker"}
                                                showTimeSelect
                                                dateFormat="Pp"
                                                ref={(c) => this._starting_date_value = c}
                                            />
                                        }
                                    </S.SelectField>
                                    <S.SelectField>
                                        <S.label>Expiration Date</S.label>
                                        <S.StartingDateSelect name={"expiration_date"} defaultValue={expiration_date} onChange={event => {this.setState({expiration_date: event.target.value})}}>
                                            <S.OrderByOption value={"1"}>1 day</S.OrderByOption>
                                            <S.OrderByOption value={"3"}>3 days</S.OrderByOption>
                                            <S.OrderByOption value={"5"}>5 days</S.OrderByOption>
                                            <S.OrderByOption value={"7"}>7 days</S.OrderByOption>
                                            <S.OrderByOption value={"specific"}>Pick specific date</S.OrderByOption>
                                        </S.StartingDateSelect>
                                        {
                                            expiration_date === "specific" &&
                                            <DatePicker
                                                selected={expiration_date_value}
                                                onChange={value => this.setState({expiration_date_value: value})}
                                                className={"input-picker"}
                                                showTimeSelect
                                                dateFormat="Pp"
                                                ref={(c) => this._expiration_date_value = c}
                                            />
                                        }
                                    </S.SelectField>
                                </S.SelectRow>
                            </>
                        }

                        <S.ModalActions>
                            <S.ModalCancelButton onClick={() => this.setState({showPutMarketPlace: false})}>Cancel</S.ModalCancelButton>
                            <S.ModalSubmitButton onClick={() => this.setState({showPutMarketPlace: false})}>Confirm</S.ModalSubmitButton>
                        </S.ModalActions>
                    </S.ModalBody>
                </Modal>
            </S.Container>
        );
    }
}

export default Detail;
