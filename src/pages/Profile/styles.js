import styled from 'styled-components';
import {ContentCopy} from "@styled-icons/material";
import {Verified} from "@styled-icons/material";

export const Container = styled.div`
    margin 48px auto;
    max-width: 1200px;
`;

export const ProfileInfo = styled.div`
    display: flex;
`;

export const ProfileAvatarContainer = styled.div`
    display: flex;
    align-items; center;
    justify-content: center;
    position: relative;
`;

export const ProfileAvatar = styled.img`
    width: 160px;
    height: 160px;
    border-radius: 80px;
`;

export const VerifiedStatusIcon = styled(Verified)`
    position: absolute;
    right: 8px;
    bottom: 8px;
`;

export const ProfileInfoContent = styled.div`
    flex-grow: 1;
    margin-left: 40px;
`;

export const Name = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: bold;
`;

export const AddressContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const Address = styled.div`
    margin-right: 12px;
`;

export const CopyActionIcon = styled(ContentCopy)`
    margin-right: 24px;
    background: grey;
    padding: 4px;
    border-radius: 4px;
    cursor: pointer;
`;

export const Email = styled.div`

`;

export const Caption = styled.div`
    margin-top: 20px;
`;

export const ProfileActions = styled.div`

`;

export const EditProfileBtn = styled.div`
    background-image: linear-gradient(180deg,#F8D12F 0%,#F0B90B 100%);
    padding: 12px 24px;
    font-size: 24px;
    margin-left: 12px;
    border-radius: 4px;
    cursor: pointer;
`;

export const TabContainer = styled.div`
    margin-top: 60px;
`;


export const TabBar = styled.div`
    display: flex;
`;


export const tab = styled.div`
    font-size: 24px;
    padding: 8px 20px;
    margin: 0 12px;
    cursor: pointer;
    &:hover {
       background-color: #e3e3e3;
    }
    &.active {
       border-bottom: solid 4px #F8D12F;
    }
`;

export const TabContent = styled.div`
    display: flex;
    margin-top: 40px;
    width: 100%;
    flex-wrap: wrap;
`;
