import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/atoms/Button';
import AddNewSite from '../components/organisms/AddNewSite';
import { connect } from 'react-redux';
import SingleVideo from '../components/organisms/SingleVideo';
import CheckBox from '../components/atoms/CheckBox';
import { Animated } from 'react-animated-css';

const ContentWrapper = styled.div`
    position: relative;
    width: 100%;
    min-height: 80vh;
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

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 5vh 2vw;
    justify-items: center;
    padding: 14vh 4vw 2vh;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 420px) {
        grid-template-columns: 1fr;
    }
`;

const Label = styled.label`
    margin-left: 10px;
    font-size: 1.3rem;
`;

const Videos = ({ videos }) => {
    const [formIsOpen, setFormIsOpen] = useState(false);
    const switchForm = () => setFormIsOpen(!formIsOpen);

    const [deleteMode, setDeleteMode] = useState(false);
    const hideDeleteMode = () => setDeleteMode(false);
    
    return ( 
        <Animated animationIn="bounceInDown" isVisible={true}>
            <ContentWrapper>
                <VideosHeader>
                    <Button sites onClick={switchForm}>add video</Button>
                    <CheckBox id="delete" type="checkbox" checked={deleteMode} onChange={() => setDeleteMode(!deleteMode)}/>
                    <Label htmlfor="delete">Delete</Label>
                </VideosHeader>
                <GridWrapper>
                    {
                        videos.map(video => (
                            <SingleVideo 
                                key={video._id}
                                id={video._id}
                                link={video.link}
                                title={video.title}
                                date={video.date}
                                deleteMode={deleteMode}
                                hideDeleteMode={hideDeleteMode}
                            />
                        ))
                    }
                </GridWrapper>
                <AddNewSite 
                    isOpen={formIsOpen}
                    switchForm={switchForm}
                    type="videos"
                />
            </ContentWrapper>
        </Animated>
    );
}

const mapStateToProps = state => ({
    videos: state.userData.videos
})
 
export default connect(mapStateToProps)(Videos);