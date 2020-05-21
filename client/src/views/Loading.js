import React from 'react';
import styled from 'styled-components';
import { theme } from '../themes/StylesVariables';

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.main};
    color: ${theme.yellow};
`;

const AnimationWrapper = styled.div`
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
`;

const Element = styled.div`
    display: inline-block;
    position: absolute;
    left: 8px;
    width: 16px;
    background: ${theme.yellow};
    animation: anim 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;

    :nth-of-type(1) {
        left: 8px;
        animation-delay: -0.24s;
    }
    :nth-of-type(2) {
        left: 32px;
        animation-delay: -0.12s;
    }
    :nth-of-type(3) {
        left: 56px;
        animation-delay: 0s;
    }

    @keyframes anim {
        0% {
            top: 8px;
            height: 64px;
        }
        50%, 100% {
            top: 24px;
            height: 32px;
        }
    }
`;

const Loading = () => {
    return ( 
        <Wrapper>
            <AnimationWrapper>
                <Element />
                <Element />
                <Element />
            </AnimationWrapper>
        </Wrapper>
    );
}
 
export default Loading;