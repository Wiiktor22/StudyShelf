import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../themes/StylesVariables';
import checkIcon from '../../assets/check.png';
import { connect } from 'react-redux';
import { deleteVideo } from '../../redux/actions/userData';

const Wrapper = styled.div`
    position: relative;
    background-color: ${theme.greyBackground};
    width: 100%;
    height: 32vh;
    border-radius: 15px;
`;

const ImgWrapper = styled.div`
    width: 100%;
    overflow: hidden;
    border-radius: 15px 15px 0 0;
`;

const Img = styled.img`
    display: block;
    width: 100%;
    margin: -34px 0;
`;

const Link = styled.a`
    display: block;
    font-size: 1.3rem;
    color: ${theme.main};
    font-weight: 600;
    padding: 1vh 10px 0;
`;

const Text = styled.p`
    font-size: 1.3rem;
    color: ${theme.main};
    font-weight: 600;
    padding: 1vh 10px 0;

    ${({ author }) => (
        author && css`
            font-size: 1.1rem;
            font-weight: 400;
        `
    )}
`;

const Icon = styled.img`
    position: absolute;
    bottom: 1vh;
    right: 5px;
    width: 22px;
    height: 22px;
    transition: .2s;
    cursor: pointer;
`;

const SingleVideo = ({ link, date, deleteVideo, deleteMode, hideDeleteMode, id }) => {
    const [videoInfo, setVideoInfo] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://noembed.com/embed?url=${link}`);
            const data = await response.json();
            setVideoInfo(data);
            setIsLoading(false);
        }
        fetchData();
    }, [])

    const handleDelete = id => {
        deleteVideo(id);
        hideDeleteMode();
    }

    const render = () => {
        if (isLoading) {
            return <p>Loading...</p>
        } else {
            const { thumbnail_url, author_name, title } = videoInfo;
            return (
                <>
                    <ImgWrapper>
                        <Img src={thumbnail_url}/>
                    </ImgWrapper>
                    <Link href={link} target="_blank">{title}</Link>
                    <Text author>{author_name}</Text>
                    <Text author>{date.slice(0,10)}</Text>
                    {deleteMode && <Icon src={checkIcon} onClick={() => handleDelete(id)}/>}
                </>
            )
        }
    }
    
    return ( 
        <Wrapper>
            {render()}
        </Wrapper>
    );
}
 
export default connect(null, { deleteVideo })(SingleVideo);