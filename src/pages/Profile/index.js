import React from "react";
import * as S from "./styles";
import Nft from "../Home/nft";


class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            curTab: 1,
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
            ]
        }
    }

    openTab = (tab) => {
        this.setState({curTab: tab});
    }

    onOpenDetail = (item) => {
        this.props.history.push('/detail');
    }

    render() {
        const {curTab, nfts} = this.state;
        return (
            <S.Container>
                <S.ProfileInfo>
                    <S.ProfileAvatarContainer>
                        <S.ProfileAvatar src={"/images/profile.png"}/>
                        <S.VerifiedStatusIcon size={40} color={'#c99400'}/>
                    </S.ProfileAvatarContainer>
                    <S.ProfileInfoContent>
                        <S.Name>Anonymous_x0bl</S.Name>
                        <S.AddressContainer>
                            <S.Address>
                                0x1cb1351dwe5ge16ge48
                            </S.Address>
                            <S.CopyActionIcon color={"white"} size={14}/>
                            <S.Email>
                                hu***@outlook.com
                            </S.Email>
                        </S.AddressContainer>
                        <S.Caption>Flare Finance delivers commemorative collection`s adn Def</S.Caption>
                    </S.ProfileInfoContent>
                    <S.ProfileActions>
                        <S.EditProfileBtn onClick={() => this.props.history.push('/edit_profile')}>Edit Profile</S.EditProfileBtn>
                    </S.ProfileActions>
                </S.ProfileInfo>
                <S.TabContainer>
                    <S.TabBar>
                        <S.tab onClick={() => this.openTab(1)} className={curTab === 1?'active': ''}>On sale</S.tab>
                        <S.tab onClick={() => this.openTab(2)} className={curTab === 2?'active': ''}>Owned</S.tab>
                        <S.tab onClick={() => this.openTab(3)} className={curTab === 3?'active': ''}>Created</S.tab>
                        <S.tab onClick={() => this.openTab(4)} className={curTab === 4?'active': ''}>Favourites</S.tab>
                    </S.TabBar>
                    <S.TabContent>
                        {
                            nfts.map((n, index)=> <Nft key={index} {...n} onOpen={() => this.onOpenDetail(n)}/>)
                        }
                    </S.TabContent>
                </S.TabContainer>
            </S.Container>
        );
    }
}

export default Profile;
