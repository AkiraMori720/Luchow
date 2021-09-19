import styled from 'styled-components';
import {PlusCircle} from "@styled-icons/feather";

export const Container = styled.div`
    margin 48px auto;
    max-width: 1200px;
`;

export const Title = styled.div`
    text-align: center;
    font-size: 32px;
    margin-bottom: 20px;
    font-weight: bold;
`;

export const UploadField = styled.div`
    margin: 40px 20px;
`;

export const SelectCollection = styled.div`
    margin: 40px 20px;
`;

export const Collections = styled.div`
    display: flex;
`;


export const collection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 180px;
    height: 180px;
    border: solid 3px #cacaca;
    border-radius: 12px;
    margin: 8px;
    &.active {
        border: solid 3px #006dff;
    }
`;

export const CollectionPlusIcon = styled(PlusCircle)`

`;


export const CollectionIcon = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 24px;
`;


export const CollectionName = styled.div`
    color: black;
    font-weight: bold;
    font-size: 20px;    
    margin-top: 12px;
`;

export const CollectionType = styled.div`
    color: grey;
`;


export const UploadContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: dotted 1px grey;
    border-radius: 12px;
    height: 200px;
`;

export const ChooseFileBtn = styled.div`
  display: inline-block;
    position: relative;
    padding: 16px 32px;
    background: #b6d5ff;
    border-radius: 32px;
    margin-top: 20px;
    color: #006dff;
    font-weight: bold;
`;

export const UploadCaption = styled.div`
    font-size: 16px;
    color: grey;
`;

export const FileInput = styled.input`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 0;
`;

export const Form = styled.div`
    margin-top: 20px;
`;

export const Field = styled.div`
    margin: 40px 20px; 
`;

export const label = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 12px;
    span{
        color: grey;
        font-size: 16px;
    }
`;

export const Input = styled.input`
    width: 100%;
    border: unset;
    border-bottom: 1px solid rgb(234, 236, 239);
    font-size: 20px;
    padding: 8px;
    &:focus-visible{
        outline: unset;
    }
`;

export const Option = styled.div`
    margin-top: 4px;
`;

export const Actions = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0; 
`;

export const CreateBtn = styled.div`
    padding: 12px 40px;
    background: #006dff;
    font-size: 24px;
    color: white;
    border-radius: 24px;
    cursor: pointer;
`;

export const SelectCategory = styled.select`
    width: 100%;
    border: unset;
    border-bottom: 1px solid rgb(234, 236, 239);
    font-size: 20px;
    padding: 8px;
    &:focus-visible{
        outline: unset;
    }
`;


export const SelectCategoryOption = styled.option`

`;

export const ModalBody = styled.div`
  padding: 8px 12px;
`;

export const ModalTitle = styled.div`
  margin-bottom: 24px;
  font-weight: bold;
  font-size: 32px;
`;

export const ModalContent = styled.div`
 display: flex;
  flex-direction: column;
  img{
    width: 120px;
    height: 120px;
  }
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ContentDetail = styled.div`
  margin: 20px 0 0 0;

   @media (min-width: 768px) {
    margin: 0 0 0 20px;
   }
`;

export const ModalAction = styled.div`
  width: 100%;
  text-align: center;
`;

export const ModalButton = styled.div`
     padding: 12px 40px;
    background: #006dff;
    font-size: 24px;
    color: white;
    border-radius: 24px;
    cursor: pointer;
`;
