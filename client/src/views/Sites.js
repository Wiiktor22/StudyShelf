import React from 'react';
import styled from 'styled-components';
import Button from '../components/atoms/Button';
import CheckBox from '../components/atoms/CheckBox';
import CategoryWrapper from '../components/molecules/CategoryContainer';

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
    return ( 
        <ContentWrapper>
            <SitesHeader>
                <Button sites>add site</Button>
                <CheckBox id="delete" type="checkbox"></CheckBox>
                <Label htmlfor="delete">Delete</Label>
            </SitesHeader>
            <GridWrapper>   
                <CategoryWrapper title="article"/>
                <CategoryWrapper title="e-book"/>
                <CategoryWrapper title="website"/>
                <CategoryWrapper title="other"/>
            </GridWrapper>
        </ContentWrapper>
    );
}
 
export default Sites;