import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../themes/StylesVariables';
import Button from '../atoms/Button';
import { connect } from 'react-redux';
import { addNewNote } from '../../redux/actions/userData';

const Wrapper = styled.div`
    position: fixed;
    top: 18vh;
    left: calc(200px + 4vw);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 50vh;
    width: 20vw;
    border-radius: 10px;
    padding: 2vh 2vw;
    background: width;
    background-color: white;
    transition: all .4s ease-in-out, border 0s .45s linear;
    transform-origin: left top;
    transform: scale(0);
    z-index: 10;

    ${({ isOpen }) => (
        isOpen && css`
            transform: scale(1);
            border: 1.5px solid ${theme.main};
        `
    )}
`;

const Header = styled.h4`
    color: ${theme.main};
    font-size: 2rem;
    margin-bottom: 5vh;
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
    margin-bottom: 2vh;
`;

const Label = styled.label`
    font-size: 1.1rem;
    margin-left: 5px;
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

const AddNoteForm = ({ isOpen, addNewNote, hideForm }) => {
    const [newNote, setNewNote] = useState({
        title: '',
        content: ''
    })

    const handleChange = e => setNewNote({
        ...newNote,
        [e.target.id]: e.target.value
    })

    const handleSubmit = e => {
        e.preventDefault();
        addNewNote(newNote);
        hideForm();
    }
    
    return ( 
        <Wrapper isOpen={isOpen}>
            <Header>create new note</Header>
            <Label htmlfor="title">title</Label>
            <Input type="text" id="title" required onChange={e => handleChange(e)}/>
            <Label htmlfor="title">content</Label>
            <TextArea id="content" required onChange={e => handleChange(e)}/>
            <Button notes onClick={e => handleSubmit(e)}>create new note</Button>
        </Wrapper>
    );
}
 
export default connect(null, { addNewNote })(AddNoteForm);