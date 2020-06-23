import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../themes/StylesVariables';
import Button from '../components/atoms/Button';
import { connect } from 'react-redux';
import SingleNote from '../components/organisms/SingleNote';
import ShowNoteWindow from '../components/organisms/ShowNoteWindow';
import CheckBox from '../components/atoms/CheckBox';
import { Animated } from 'react-animated-css';

const ContentWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 80vh;
    background-color: white;
    margin-top: 6vh;
`;

const NotesHeader = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    top: 6vh;
    left: 4vw;

    @media (max-width: 768px) {
        top: 3vh;
    }
    @media (max-width: 420px) {
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
`;

const SearchInput = styled.input`
    display: block;
    margin: 0 3vw;
    padding: 7px 15px;
    width: 200px;
    border-radius: 15px;
    border: none;
    border: 1.5px solid ${theme.main};
    font-family: 'Montserrat', sans-serif;

    @media (max-width: 420px) {
        margin: 0 0 1vh;
    }
`;

const NotesWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5vh 3vw;
    padding: 14vh 4vw 2vh;

    @media (max-width: 1366px) {
        grid-gap: 5vh 2vw;
    }
    @media (max-width: 1024px) {
        grid-gap: 3vh 1.5vw;
    }
    @media (max-width: 768px) {
        padding: 10vh 4vw 2vh;
    }
    @media (max-width: 420px) {
        padding: 20vh 4vw 2vh;
        grid-template-columns: 1fr;
    }
`;

const Label = styled.label`
    margin-left: 10px;
    font-size: 1.3rem;
`;

const InputWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const Notes = ({ notes }) => {
    const [showForm, setShowForm] = useState(false);
    const switchForm = () => setShowForm(!showForm);
    
    // Change mode for window add/read
    const [willRead, setWillRead] = useState(false);
    const switchRead = () => setWillRead(true);
    
    // Set note to display
    const [readenNote, setReadenNote] = useState('');
    const selectNote = id => {
        const note = notes.filter(note => note._id === id);
        setReadenNote(note[0]);
    }

    const handleAddButtonClick = () => {
        if (willRead) setWillRead(false);
        switchForm();
    }

    const [deleteMode, setDeleteMode] = useState(false);
    const hideDeleteMode = () => setDeleteMode(false);

    const [searchedValue, setSearchedValue] = useState('');
    const filterNotes = notes.filter(note => note.title.includes(searchedValue));

    return (
        <Animated animationIn="bounceInDown" isVisible={true}>
            <ContentWrapper>
                <NotesHeader>
                    <Button notes onClick={handleAddButtonClick}>add note</Button>
                    <SearchInput placeholder="search by title" value={searchedValue} onChange={(e) => setSearchedValue(e.target.value)}/>
                    <InputWrapper>
                        <CheckBox id="delete" type="checkbox" onChange={() => setDeleteMode(!deleteMode)} checked={deleteMode}/>
                        <Label htmlfor="delete">Delete</Label>
                    </InputWrapper>
                </NotesHeader>
                <NotesWrapper>
                    {
                        filterNotes.map(note => (
                            <SingleNote
                                id={note._id}
                                key={note._id}
                                title={note.title}
                                content={note.content}
                                date={note.date}
                                deleteMode={deleteMode}
                                hideDeleteMode={hideDeleteMode}
                                switchRead={switchRead}
                                switchForm={switchForm}
                                selectNote={selectNote}
                            />
                        ))
                    }
                </NotesWrapper>
                <ShowNoteWindow 
                    isOpen={showForm}
                    switchForm={switchForm}
                    read={willRead}
                    note={readenNote}
                />
            </ContentWrapper>
        </Animated>
    );
}

const mapStateToProps = state => ({
    notes: state.userData.notes
})
 
export default connect(mapStateToProps)(Notes);