import React from "react";
import Modal from "react-modal";
import * as S from "./styles";


class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            royalties: 10,
            category: 'Sports',
            collection: 'rarible',
            showCreateCollectionDlg: false,
            collection_name: ''
        }
    }

    onCreateCollection = () => {
        this.setState({showCreateCollectionDlg: true});
    }

    onCreateItem = () => {

    }

    render() {
        const {collection, title, description, royalties, category, showCreateCollectionDlg, collection_name} = this.state;
        return (
            <S.Container>
                <S.Title>Create NFT</S.Title>
                <S.UploadField>
                    <S.label>Upload file</S.label>
                    <S.UploadContainer>
                        <S.UploadCaption>PNG, GIF, WEBP, MP4 or MP3. Max 100mb</S.UploadCaption>
                        <S.ChooseFileBtn>
                            Choose File
                            <S.FileInput type="file"/>
                        </S.ChooseFileBtn>
                    </S.UploadContainer>
                </S.UploadField>
                <S.UploadField>
                    <S.label>Upload file</S.label>
                    <S.UploadContainer>
                        <S.UploadCaption>JPG, PNG, GIF, WEBP. Max 100mb</S.UploadCaption>
                        <S.ChooseFileBtn>
                            Choose File
                            <S.FileInput type="file"/>
                        </S.ChooseFileBtn>
                    </S.UploadContainer>
                    <S.Option>Please add cover Image to your media file</S.Option>
                </S.UploadField>
                <S.SelectCollection>
                    <S.label>Choose collection</S.label>
                    <S.Collections>
                        <S.collection onClick={this.onCreateCollection}>
                            <S.CollectionPlusIcon size={48}/>
                            <S.CollectionName>Create</S.CollectionName>
                            <S.CollectionType>ERC-721</S.CollectionType>
                        </S.collection>
                        <S.collection onClick={() => this.setState({collection: 'rarible'})} className={collection === 'rarible'?'active':''}>
                            <S.CollectionIcon src={"/images/rarible.png"}/>
                            <S.CollectionName>Rarible</S.CollectionName>
                            <S.CollectionType>RaAI</S.CollectionType>
                        </S.collection>
                    </S.Collections>
                </S.SelectCollection>
                <S.Form>
                    <S.Field>
                        <S.label>Title</S.label>
                        <S.Input value={title} placeholder="e.g. 'Redeemable T-Shirt with logo'"/>
                    </S.Field>
                    <S.Field>
                        <S.label>Description <span> (Optional)</span></S.label>
                        <S.Input value={description} placeholder="e.g. 'After purchasing you`ll be able to get the real T-shirt"/>
                        <S.Option>With preserved line-breaks</S.Option>
                    </S.Field>
                    <S.Field>
                        <S.label>Royalties</S.label>
                        <S.Input type={"number"} value={royalties}/>
                        <S.Option>Suggested: 10%, Minimum is 5%, Maximum is 20%</S.Option>
                    </S.Field>
                    <S.Field>
                        <S.label>Select Category</S.label>
                        <S.SelectCategory name={"category"} defaultValue={category} onChange={event => this.setState({category: event.target.value})}>
                            <S.SelectCategoryOption value={"Art"}>Art</S.SelectCategoryOption>
                            <S.SelectCategoryOption value={"Sports"}>Sports</S.SelectCategoryOption>
                        </S.SelectCategory>
                    </S.Field>
                    <S.Actions>
                        <S.CreateBtn onClick={this.onCreateItem}>Create item</S.CreateBtn>
                    </S.Actions>
                </S.Form>
                <Modal
                    isOpen={showCreateCollectionDlg}
                    onRequestClose={() => this.setState({showCreateCollectionDlg: false})}
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
                        <S.ModalTitle>Collection</S.ModalTitle>
                        <S.ModalContent>
                            <img src={"/images/erc721.png"} alt={"pig"}/>
                            <S.ContentDetail>
                                <S.UploadCaption>We recommend an image of at least 400X400. Gifs work too.</S.UploadCaption>
                                <S.ChooseFileBtn>
                                    Choose File
                                    <S.FileInput type="file"/>
                                </S.ChooseFileBtn>
                            </S.ContentDetail>
                        </S.ModalContent>
                        <S.Field>
                            <S.label>Display name</S.label>
                            <S.Input placeholder={"Enter name"} value={collection_name} onChange={value => this.setState({collection_name: value})}/>
                        </S.Field>
                        <S.ModalAction>
                            <S.ModalButton onClick={() => this.setState({showCreateCollectionDlg: false})}>Create collection</S.ModalButton>
                        </S.ModalAction>
                    </S.ModalBody>
                </Modal>
            </S.Container>
        );
    }
}

export default Create;
