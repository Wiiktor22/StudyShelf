import React, { useState } from 'react';
import exitIcon from '../../assets/exit.png';
import { Wrapper, ExitButton, FlexWrapper, Header, Label, Input, Select } from '../../components/molecules/AddFormCopmonents';
import Button from '../atoms/Button';
import { connect } from 'react-redux';
import { addNewLink, addNewVideo } from '../../redux/actions/userData';
 
const AddNewSite = ({ switchForm, isOpen, addNewLink, type, addNewVideo }) => {
    const initialStateForLink = {
        link: '',
        title: '',
        category: 'article'
    }
    const [newLink, setNewLink] = useState(initialStateForLink);
    const handleChangeForLink = e => setNewLink({
        ...newLink,
        [e.target.id]: e.target.value
    })
    const handleSubmitForLink = e => {
        e.preventDefault();
        addNewLink(newLink);
        setNewLink(initialStateForLink);
        switchForm();
    }

    const initialStateForVideo = {
        link: ''
    }
    const [newVideo, setNewVideo] = useState(initialStateForVideo);
    const handleChangeForVideo = e => setNewVideo({
        ...newVideo,
        [e.target.id]: e.target.value
    })
    const handleSubmitForVideo = e => {
        e.preventDefault();
        addNewVideo(newVideo);
        setNewVideo(initialStateForVideo);
        switchForm();
    }

    const renderContent = () => {
        switch (type) {
            case 'sites':
                return (
                    <>
                        <Header>create new link</Header>
                        <Label htmlfor="link">link</Label>
                        <Input type="text" id="link" required onChange={e => handleChangeForLink(e)} value={newLink.link}/>
                        <Label htmlfor="title">title</Label>
                        <Input type="text" id="title" required onChange={e => handleChangeForLink(e)} value={newLink.title}/>
                        <Label htmlfor="category">category</Label>
                        <Select id="category" value={newLink.category} onChange={e => handleChangeForLink(e)} required>
                            <option value="article">article</option>
                            <option value="e-book">e-book</option>
                            <option value="website">website</option>
                            <option value="other">other</option>
                        </Select>
                        <Button notes yellow onClick={e => handleSubmitForLink(e)}>create new link</Button>
                    </>
                )
            case 'videos':
                return (
                    <>
                        <Header>create new video</Header>
                        <Label htmlfor="link">youtube link</Label>
                        <Input type="text" id="link" required onChange={e => handleChangeForVideo(e)} value={newVideo.link}/>
                        <Button notes yellow onClick={e => handleSubmitForVideo(e)}>create new video</Button>
                    </>
                )
            default:
                return true
        }
    }
    
    return ( 
        <Wrapper isOpen={isOpen}>
            <ExitButton src={exitIcon} onClick={switchForm}/>
            <FlexWrapper>
                {renderContent()}
            </FlexWrapper>
        </Wrapper>    
    );
}
 
export default connect(null, { addNewLink, addNewVideo })(AddNewSite);