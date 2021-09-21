import styled from 'styled-components';
import {PhotoCamera} from "@styled-icons/material";

export const Container = styled.div`
    max-width: 1200px;
    margin: 48px 20px;
  @media (min-width: 1200px){
    margin: 48px auto;
  }
`;

export const Title = styled.div`
    text-align: center;
    font-size: 32px;
    margin-bottom: 20px;
`;

export const EditImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ProfileImage = styled.img`
    width: 140px;
    height: 140px;
    border-radius: 70px;
`;

export const ProfileContainer = styled.div`
    position: relative;
`;

export const CameraIcon = styled(PhotoCamera)`
    position: absolute;
    top: 50px;
    left: 50px;
`;

export const FileInput = styled.input`
    position: absolute;
    top: 20px;
    left: 20px;
    width: 100px;
    height: 100px;
    opacity: 0;
`;

export const Form = styled.div`
    margin-top: 20px;
`;

export const Field = styled.div`
    margin: 12px 20px; 
`;

export const label = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 12px;
`;

export const Input = styled.input`
    width: 100%;
    border: 1px solid rgb(234, 236, 239);
    border-radius: 4px;
    font-size: 20px;
    padding: 8px;
    &:focus-visible{
        outline: unset;
    }
`;

export const Textarea = styled.textarea`
    width: 100%;
    border: 1px solid rgb(234, 236, 239);
    border-radius: 4px;
    font-size: 20px;
    padding: 8px;
    height: 240px;
    &:focus-visible{
        outline: unset;
    }
`;

export const Option = styled.div`
    margin-top: 4px;
    text-align: right;
`;

export const Actions = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 20px 0; 
`;

export const CancelBtn = styled.div`
    padding: 12px 24px;
    background: #b01010;
    font-size: 24px;
    color: white;
    border-radius: 4px;
    cursor: pointer;
`;

export const SubmitBtn = styled.div`
    background-image: linear-gradient(180deg,#F8D12F 0%,#F0B90B 100%);
    padding: 12px 24px;
    font-size: 24px;
    margin-left: 12px;
    border-radius: 4px;
    cursor: pointer;
`;

