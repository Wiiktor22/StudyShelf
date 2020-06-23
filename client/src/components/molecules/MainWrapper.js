import React from 'react';
import styled from 'styled-components';
import Nav from '../organisms/Nav';
import Header from '../organisms/Header';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Wrapper = styled.div`
    position: relative;
    min-height: 90vh;
    margin-left: 200px;

    @media (max-width: 768px) {
        margin-left: 0;
        margin-top: 8vh;
    }
`;

const MainWrapper = ({ children, isAuthenticated }) => {
    if (!isAuthenticated) { return <Redirect to='/' /> }
    
    return ( 
        <Wrapper>
            {window.innerWidth > 800 && <Header />}
            <Nav/>
            {children}
        </Wrapper>
    );
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})
 
export default connect(mapStateToProps)(MainWrapper);