import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../themes/StylesVariables';
import Button from '../components/atoms/Button';
import AddNoteForm from '../components/organisms/AddNoteForm';
import { connect } from 'react-redux';
import SingleNote from '../components/organisms/SingleNote';

const ContentWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 94vh;
    background-color: ${theme.background};
`;

const NotesHeader = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    top: 6vh;
    left: 4vw;
`;

const SearchInput = styled.input`
    display: block;
    margin-left: 3vw;
    padding: 7px 15px;
    width: 200px;
    border-radius: 15px;
    border: none;
    border: 1.5px solid ${theme.main};
    font-family: 'Montserrat', sans-serif;
`;

const NotesWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5vh 3vw;
    padding: 14vh 4vw 2vh;
`;

const Notes = ({ notes }) => {
    const [showForm, setShowForm] = useState(false);
    const hideForm = () => setShowForm(false);
    return ( 
        <ContentWrapper>
            <NotesHeader>
                <Button notes onClick={() => setShowForm(!showForm)}>add note</Button>
                <SearchInput placeholder="search by title" />
            </NotesHeader>
            <AddNoteForm isOpen={showForm} hideForm={hideForm}/>
            <NotesWrapper>
                {
                    notes.map(note => (
                        <SingleNote 
                            title={note.title}
                            content={note.content}
                            date={note.date}
                        />
                    ))
                }
            </NotesWrapper>
        </ContentWrapper>
    );
}

const mapStateToProps = state => ({
    notes: state.userData.notes
})
 
export default connect(mapStateToProps)(Notes);