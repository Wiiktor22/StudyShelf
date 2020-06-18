import React, { useState } from 'react';
import exitIcon from '../../assets/exit.png';
import Button from '../atoms/Button';
import { connect } from 'react-redux';
import { addNewNote } from '../../redux/actions/userData';
import { Wrapper, ExitButton, FlexWrapper, Header, Label, Input, TextArea, Content } from '../../components/molecules/AddFormCopmonents';

const ShowNoteWindow = ({ isOpen, switchForm, read, addNewNote, note }) => {
    //ADDING NOTE FUNCTIONS
    const initialState = {
        title: '',
        content: ''
    }
    const [newNote, setNewNote] = useState(initialState);

    const handleChange = e => setNewNote({
        ...newNote,
        [e.target.id]: e.target.value
    })

    const handleSubmit = e => {
        e.preventDefault();
        addNewNote(newNote);
        setNewNote(initialState);
        switchForm();
    }
    
    const renderContent = () => {
        if (read) {
            const { title, content, date } = note;
            return (
                <FlexWrapper>
                    <Header>{title}</Header>
                    <Content>{content}</Content>
                    <Content date>{date.slice(0,10)}</Content>
                </FlexWrapper>
            )
        } else {
            return (
                <FlexWrapper>
                    <Header>create new note</Header>
                    <Label htmlfor="title">title</Label>
                    <Input type="text" id="title" required onChange={e => handleChange(e)} value={newNote.title}/>
                    <Label htmlfor="title">content</Label>
                    <TextArea id="content" required onChange={e => handleChange(e)} value={newNote.content}/>
                    <Button notes yellow onClick={e => handleSubmit(e)}>create new note</Button>
                </FlexWrapper>
            )
        }
    }
    
    return (
        <Wrapper isOpen={isOpen}>
            <ExitButton src={exitIcon} onClick={switchForm}/>
            {renderContent()}
        </Wrapper>
    );
}
 
export default connect(null, { addNewNote })(ShowNoteWindow);