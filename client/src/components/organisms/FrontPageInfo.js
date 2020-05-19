import React from 'react';
import styled from 'styled-components';
import Logo from '../atoms/Logo';
import Text from '../atoms/Text';
import Photography from '../../assets/front.png';
import {Animated} from "react-animated-css";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    text-align: center;
`;

const Img = styled.img`
    height: 250px;
    width: 300px;
`;

const FrontPageInfo = () => {
    return ( 
        <Wrapper>
            <Animated animationIn="bounceInDown" isVisible={true}>
                <Logo>StudyShelf</Logo>
            </Animated>
            <Animated animationIn="bounceInDown" isVisible={true} animationInDelay={800}>
                <Img src={Photography} />
            </Animated>
            <Animated animationIn="bounceInDown" isVisible={true} animationInDelay={1600}>
                <Text yellow>The tool which helps you organize your study materials better.</Text>
            </Animated>
        </Wrapper>
    );
}
 
export default FrontPageInfo;