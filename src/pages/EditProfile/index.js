import React from "react";
import * as S from "./styles";


class EditProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <S.Container>
                <S.Title>Edit Profile</S.Title>
                <S.EditImage>
                    <S.ProfileContainer>
                        <S.ProfileImage src={"/images/profile.png"} />
                        <S.CameraIcon size={40} color={'white'}/>
                        <S.FileInput type="file"/>
                    </S.ProfileContainer>
                </S.EditImage>
                <S.Form>
                    <S.Field>
                        <S.label>Name</S.label>
                        <S.Input/>
                        <S.Option>0/20</S.Option>
                    </S.Field>
                    <S.Field>
                        <S.label>Bio</S.label>
                        <S.Textarea/>
                        <S.Option>0/100</S.Option>
                    </S.Field>
                    <S.Field>
                        <S.label>Social Link</S.label>
                        <S.Input/>
                    </S.Field>
                    <S.Actions>
                        <S.CancelBtn>Cancel</S.CancelBtn>
                        <S.SubmitBtn>Submit</S.SubmitBtn>
                    </S.Actions>
                </S.Form>
            </S.Container>
        );
    }
}

export default EditProfile;
