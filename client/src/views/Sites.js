import React from 'react';
import styled from 'styled-components';
import Button from '../components/atoms/Button';
import CheckBox from '../components/atoms/CheckBox';
import CategoryWrapper from '../components/molecules/CategoryContainer';
import { useState } from 'react';
import AddNewSite from '../components/organisms/AddNewSite';
import { Animated } from 'react-animated-css';

const ContentWrapper = styled.div`
    position: relative;
    width: 100%;
    background-color: white;
    margin-top: 6vh;
`;

const SitesHeader = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    top: 6vh;
    left: 4vw;
`;

const Label = styled.label`
    margin-left: 10px;
    font-size: 1.3rem;
`;

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 5vh 3vw;
    justify-items: center;
    padding: 14vh 5vw 2vh;
    width: 100%;
    min-height: 90vh;
`;

const Sites = () => {
    const [formIsOpen, setFormIsOpen] = useState(false);
    const switchForm = () => setFormIsOpen(!formIsOpen);
    const animationTime = 1000;

    const [deleteMode, setDeleteMode] = useState(false);
    const hideDeleteMode = () => setDeleteMode(false);

    return ( 
        <ContentWrapper>
            <SitesHeader>
                <Button sites onClick={switchForm}>add site</Button>
                <CheckBox id="delete" type="checkbox" onChange={() => setDeleteMode(!deleteMode)} checked={deleteMode}></CheckBox>
                <Label htmlfor="delete">Read</Label>
            </SitesHeader>
            <GridWrapper>
                <Animated animationIn="bounceInDown" animationInDuration={animationTime} isVisible={true}> 
                    <CategoryWrapper title="article" deleteMode={deleteMode} hideDeleteMode={hideDeleteMode}/>
                </Animated>
                <Animated animationIn="bounceInDown" animationInDuration={animationTime} animationInDelay={animationTime / 2} isVisible={true}> 
                    <CategoryWrapper title="e-book" deleteMode={deleteMode} hideDeleteMode={hideDeleteMode}/>
                </Animated>
                <Animated animationIn="bounceInDown" animationInDuration={animationTime} animationInDelay={animationTime} isVisible={true}> 
                    <CategoryWrapper title="website" deleteMode={deleteMode} hideDeleteMode={hideDeleteMode}/>
                </Animated>
                <Animated animationIn="bounceInDown" animationInDuration={animationTime} animationInDelay={animationTime * 1.5} isVisible={true}> 
                    <CategoryWrapper title="other" deleteMode={deleteMode} hideDeleteMode={hideDeleteMode}/>
                </Animated>
            </GridWrapper>
            <AddNewSite 
                isOpen={formIsOpen}
                switchForm={switchForm}
            />
        </ContentWrapper>
    );
}
 
export default Sites;