import React from 'react';
import styled from 'styled-components';
import { theme } from '../../themes/StylesVariables';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/auth';

const Wrapper = styled.header`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 6vh;
    width: 100%;
`;

const Button = styled.button`
    color: ${theme.main};
    background-color: transparent;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.4rem;
    font-weight: 600;
    margin-right: 4vw;
`;

const UserInfo = styled.p`
    color: ${theme.main};
    font-family: 'Montserrat', sans-serif;
    font-size: 1.4rem;
    font-weight: 600;
    margin-right: 3vw;
`;

const Header = ({ name, lastName, logout }) => {

    return ( 
        <Wrapper>
            <UserInfo>{name} {lastName}</UserInfo>
            <Button onClick={logout}>Log out</Button>
        </Wrapper>
    );
}

const mapStateToProps = state => ({
    name: state.auth.user.name,
    lastName: state.auth.user.lastName
})
 
export default connect(mapStateToProps, { logout })(Header);
