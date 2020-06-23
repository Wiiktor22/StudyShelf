import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../themes/StylesVariables';
import FrontPageInfo from '../components/organisms/FrontPageInfo';
import LogIn from '../components/organisms/LogIn';
import SignUp from '../components/organisms/Register';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 4fr 6fr;
    height: 100vh;
    width: 100%;

    @media (max-width: 420px) {
        grid-template-columns: 1fr;
    }
`;

const Section = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;

    ${({ left }) => (
        left && css`
            background-color: ${theme.main};
        `
    )}

    ${({ mobile }) => (
        mobile && css`
            padding: 0 5vw;
        `
    )}
`;

const SingIn = ({ isAuthenticated }) => {
    const [showRegister, setShowRegister] = useState(false);
    const toggle = () => {
        setShowRegister(!showRegister);
    };
    if (isAuthenticated) { return <Redirect to='/notes' /> }

    const renderContent = () => {
        if (window.innerWidth > 420) {
            return (
                <Wrapper>
                    <Section left>
                        <FrontPageInfo />
                    </Section>
                    <Section>
                        {showRegister ? <SignUp toggle={toggle}/> : <LogIn toggle={toggle}/>}
                    </Section>
                </Wrapper>
            )
        } else {
            return (
                <Wrapper>
                    <Section mobile>
                        {showRegister ? <SignUp toggle={toggle}/> : <LogIn toggle={toggle}/>}
                    </Section>
                </Wrapper>
            )
        }
    }

    return (
        <>
            {renderContent()}
        </>
    );
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})
 
export default connect(mapStateToProps)(SingIn);