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
`;

const MainWrapper = ({ children, isAuthenticated }) => {
    if (!isAuthenticated) { return <Redirect to='/' /> }
    
    return ( 
        <Wrapper>
            <Header />
            <Nav/>
            {children}
        </Wrapper>
    );
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})
 
export default connect(mapStateToProps)(MainWrapper);