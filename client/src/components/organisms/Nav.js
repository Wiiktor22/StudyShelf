import React from 'react';
import styled from 'styled-components';
import { theme } from '../../themes/StylesVariables';
import Logo from '../atoms/Logo';
import MyLink from '../atoms/NavLink';
import NotesIcon from '../../assets/NavLinks/notes.png';

const Wrapper = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 200px;
    background-color: ${theme.main};
`;

const Nav = () => {
    return ( 
        <Wrapper>
            <Logo nav>StudyShelf</Logo>
            <MyLink component="notes" name="notes" icon={NotesIcon}/>
        </Wrapper>
    );
}
 
export default Nav;