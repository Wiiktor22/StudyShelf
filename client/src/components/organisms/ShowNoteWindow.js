import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../themes/StylesVariables';
import exitIcon from '../../assets/exit.png';
import Button from '../atoms/Button';
import { connect } from 'react-redux';
import { addNewNote } from '../../redux/actions/userData';

const Wrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: ${({ isOpen }) => isOpen ? 'translate(-50%, -50%)' : 'translate(-50%, -200%)'};
    height: 50vh;
    width: 30vw;
    background-color: black;
    border-radius: 15px;
    background-color: white;
    border: ${({ isOpen }) => isOpen ? `1.5px solid ${theme.main}` : 'none'};
    transition: transform .6s ease-in-out, border .05s .55s linear;
`;

const ExitButton = styled.img`
    position: absolute;
    top: 2vh;
    right: 1vw;
    width: 22px;
    height: 22px;
    cursor: pointer;
`;

const FlexWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 2vh 1vw;
`;

const Header = styled.h4`
    color: ${theme.main};
    font-size: 2rem;
    margin-bottom: 5vh;
`;

const Label = styled.label`
    font-size: 1.1rem;
    margin-left: 5px;
    margin-bottom: 3px;
`;

const Input = styled.input`
    display: block;
    background-color: #fafafa;
    border: none;
    border-bottom: 2px solid ${theme.main};
    padding: 7px 12px;
    font-size: 1.3rem;
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    margin-bottom: 3vh;
`;

const TextArea = styled.textarea`
    display: block;
    background-color: #fafafa;
    border: none;
    border-bottom: 2px solid ${theme.main};
    padding: 7px 12px;
    font-size: 1.3rem;
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    height: 20vh;
    resize: none;
    margin-bottom: 5vh;
`;

const Content = styled.p`
    font-size: 1.3rem;

    ${({ date }) => (
        date && css`
            position: absolute;
            left: 1vw;
            bottom: 2vh;
            color: ${theme.main};
            font-size: 1.1rem;
        `
    )}
`;

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
                    <Button notes onClick={e => handleSubmit(e)}>create new note</Button>
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