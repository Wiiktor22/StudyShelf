import React from 'react';
import styled from 'styled-components';
import Button from '../components/atoms/Button';

const ContentWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 80vh;
    background-color: white;
    margin-top: 6vh;
`;

const VideosHeader = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    top: 6vh;
    left: 4vw;
`;

const Videos = () => {
    return ( 
        <ContentWrapper>
            <VideosHeader>
                <Button sites>add video</Button>
            </VideosHeader>
        </ContentWrapper>
    );
}
 
export default Videos;