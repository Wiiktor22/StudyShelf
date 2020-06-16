import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../themes/StylesVariables';
import Button from '../atoms/Button';
import trashIcon from '../../assets/trashIcon.svg';
import { connect } from 'react-redux';
import { deleteNote } from '../../redux/actions/userData';

const NoteWrapper = styled.div`
    position: relative;
    width: 25vw;
    height: 30vh;
    background-color: ${theme.greyBackground};
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(33,33,33, .1);
    padding: 2vh 1vw;

    :hover {
        box-shadow: 0 0 10px rgba(33,33,33, .2);
    }
`;

const Header = styled.h4`
    color: ${theme.main};
    font-size: 2rem;
    margin-bottom: 3vh;
    font-weight: 600;
`;

const DownMenu = styled.div`
    position: absolute;
    bottom: 2vh;
    left: 1vw;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`;

const Content = styled.p`
    font-size: 1.3rem;

    ${({ date }) => (
        date && css`
            color: ${theme.main};
            font-size: 1.1rem;
            margin-left: 20px;
        `
    )}
`;

const Icon = styled.img`
    position: absolute;
    top: 50%;
    right: 2vw;
    transform: translateY(-50%);
    width: 22px;
    height: 22px;
    transition: .2s;
    cursor: pointer;
`;

const SingleNote = ({ title, content, date, id, deleteMode, deleteNote, hideDeleteMode, switchRead, switchForm, selectNote }) => {
    const handleClick = id => {
        switchRead();
        selectNote(id);
        switchForm();
    }
    
    const handleDelete = id => {
        deleteNote(id);
        hideDeleteMode();
    }
    
    return ( 
        <NoteWrapper>
            <Header>{title}</Header>
            <Content>{content}</Content>
            <DownMenu>
                <Button note onClick={() => handleClick(id)}>read more...</Button>
                <Content date>{date.slice(0, 10)}</Content>
                {deleteMode && <Icon src={trashIcon} onClick={() => handleDelete(id)}/>}
            </DownMenu>
        </NoteWrapper>
    );
}
 
export default connect(null, { deleteNote })(SingleNote);