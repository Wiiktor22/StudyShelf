import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from '../../themes/StylesVariables';

const StyledLink = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.8rem;
    color: ${theme.yellow};
    font-weight: 600;
    padding: 1vh 0;
    width: 100%;

    @media (max-width: 768px) {
        width: auto;
        margin-right: 3vw;
    }
    @media (max-width: 420px) {
        margin-right: 1vw;
    }
`;

const Icon = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 5px;
`;

const MyLink = ({ component, name, icon }) => {
    const linkToSite = `/${component}`;
    
    return (
        <StyledLink exact to={linkToSite}>
            <Icon src={icon}/>
            {window.innerWidth > 420 && name}
        </StyledLink>
    );
}
 
export default MyLink;