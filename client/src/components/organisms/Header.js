import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../themes/StylesVariables';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/auth';
import { useLocation } from 'react-router-dom';

const Wrapper = styled.header`
    position: fixed;
    left: 200px;
    right: 0;
    top: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 6vh;
    box-shadow: 1px 2px 18px rgba(0,0,0,.1);
    background-color: white;
    z-index: 9;
`;

const Button = styled.button`
    color: ${theme.main};
    background-color: transparent;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.4rem;
    font-weight: 600;
    margin-right: 4vw;
`;

const Info = styled.p`
    color: ${theme.main};
    font-family: 'Montserrat', sans-serif;
    font-size: 1.4rem;
    font-weight: 600;
    margin-right: 3vw;

    ${({ page }) => (
        page && css`
            position: absolute;
            top: 50%;
            left: 4vw;
            transform: translateY(-50%);
            margin-right: 0;
        `
    )}
`;

const Header = ({ name, lastName, logout }) => {
    let location = useLocation();
    const page = location.pathname.substring(1);

    return ( 
        <Wrapper>
            <Info page>{page} page</Info>
            <Info>{name} {lastName}</Info>
            <Button onClick={logout}>Log out</Button>
        </Wrapper>
    );
}

const mapStateToProps = state => ({
    name: state.auth.user.name,
    lastName: state.auth.user.lastName
})
 
export default connect(null, { logout })(Header);
