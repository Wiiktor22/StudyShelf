import React from 'react';
import styled from 'styled-components';
import { theme } from '../../themes/StylesVariables';
import Logo from '../atoms/Logo';
import MyLink from '../atoms/NavLink';
import NotesIcon from '../../assets/NavLinks/notes.png';
import SitesIcon from '../../assets/NavLinks/sites.png';
import VideosIcon from '../../assets/NavLinks/youtube.png';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/auth';

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

    @media (max-width: 768px) {
        bottom: auto;
        right: 0;
        height: 8vh;
        width: 100%;
        max-width: 100vw;
        flex-direction: row;
        justify-content: space-between;

    }
`;

const Button = styled.button`
    color: ${theme.yellow};
    background-color: transparent;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.4rem;
    font-weight: 600;
    margin-right: 4vw;
`;

const Nav = ({ logout }) => {
    return ( 
        <Wrapper>
            <Logo nav>StudyShelf</Logo>
            <MyLink component="notes" name="notes" icon={NotesIcon} />
            <MyLink component="sites" name="sites" icon={SitesIcon} />
            <MyLink component="videos" name="videos" icon={VideosIcon} />
            {window.innerWidth <= 768 && <Button onClick={logout}>Log out</Button>}
        </Wrapper>
    );
}
 
export default connect(null, { logout })(Nav);