import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../themes/StylesVariables';
import FrontPageInfo from '../components/organisms/FrontPageInfo';
import LogIn from '../components/organisms/LogIn';
import SignUp from '../components/organisms/Register';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 4fr 6fr;
    height: 100vh;
    width: 100%;
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
`;

const SingIn = () => {
    const [showRegister, setShowRegister] = useState(false);
    const toggle = () => {
        setShowRegister(!showRegister);
    }
    return ( 
        <Wrapper>
            <Section left>
                <FrontPageInfo />
            </Section>
            <Section>
                {showRegister ? <SignUp toggle={toggle}/> : <LogIn toggle={toggle}/>}
            </Section>
        </Wrapper>
    );
}
 
export default SingIn;