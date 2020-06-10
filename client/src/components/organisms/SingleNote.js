import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../themes/StylesVariables';
import Button from '../atoms/Button';

const NoteWrapper = styled.div`
    position: relative;
    width: 25vw;
    height: 30vh;
    background-color: white;
    border-radius: 10px;
    padding: 2vh 1vw;
`;

const Header = styled.h4`
    color: ${theme.main};
    font-size: 2rem;
    margin-bottom: 3vh;
    font-family: 'Fredoka One', cursive;
`;

const DownMenu = styled.div`
    position: absolute;
    bottom: 2vh;
    left: 1vw;
    display: flex;
    justify-content: flex-start;
    align-items: center;
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

const SingleNote = ({ title, content, date}) => {
    return ( 
        <NoteWrapper>
            <Header>{title}</Header>
            <Content>{content}</Content>
            <DownMenu>
                <Button note>read more...</Button>
                {console.log(date)}
                <Content date>{date.slice(0, 10)}</Content>
            </DownMenu>
        </NoteWrapper>
    );
}
 
export default SingleNote;