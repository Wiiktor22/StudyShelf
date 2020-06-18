import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../themes/StylesVariables';
import { connect } from 'react-redux';
import checkIcon from '../../assets/check.png';
import { deleteLink } from '../../redux/actions/userData';

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 33vw;
    background-color: ${theme.greyBackground};
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(33,33,33, .1);
    height: 100%;

    :hover {
        box-shadow: 0 0 10px rgba(33,33,33, .2);
    }
`;

const Header = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5vh;
    display: grid;
    grid-template-rows: 100%;
    grid-template-columns: 2fr 1fr;
    place-items: center center;
    background-color: ${theme.main};
    border-radius: 10px 10px 0 0;
`;

const HeaderText = styled.p`
    color: white;
    font-size: 1.4rem;

    ${({ bold }) => (
        bold && css`
            font-weight: 600;
        `
    )}
`;

const Links = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    margin-top: 5vh;
`;

const SingleLink = styled.div`
    position: relative;
    display: grid;
    grid-template-rows: 100%;
    grid-template-columns: 2fr 1fr;
    place-items: center center;
    border-bottom: 2px solid #f2f2f2;
    height: 4vh;
`;

const LinkText = styled.a`
    font-size: 1.3rem;
    color: ${({ link }) => link ? `${theme.main}` : `black`};
    font-weight: ${({ link }) => link ? 600 : 400};
`;

const Text = styled.p`
    color: ${theme.main};
    font-size: 1.3rem;
    text-align: center;
    margin-top: ${({ empty }) => empty ? `2vh` : 0};
`;

const Icon = styled.img`
    position: absolute;
    top: 50%;
    right: 1vw;
    transform: translateY(-50%);
    width: 22px;
    height: 22px;
    transition: .2s;
    cursor: pointer;
`;

const CategoryWrapper = ({ title, links, deleteMode, hideDeleteMode, deleteLink }) => {
    const filterArray = links.filter(link => link.category === title);
    const emptyText = `There is no ${title}s saved!`;

    const handleDelete = id => {
        deleteLink(id);
        hideDeleteMode();
    }

    const renderContect = () => {
        if(filterArray.length) {
            return (
                <>
                    {filterArray.map(item => (
                        <SingleLink key={item._id}>
                            <LinkText link href={item.link} target="_blank">{item.title}</LinkText>
                            <Text>{item.date.slice(0, 10)}</Text>
                            {deleteMode && <Icon src={checkIcon} onClick={() => handleDelete(item._id)}/>}
                        </SingleLink>
                    ))}
                </>
            )
        } else {
            return <Text empty>{emptyText}</Text>
        }
    }

    return ( 
        <Wrapper>
            <Header>
                <HeaderText bold>{title}</HeaderText>
                <HeaderText>date</HeaderText>
            </Header>
            <Links>
                {renderContect()}
            </Links>
        </Wrapper>
    );
}

const mapStateToProps = state => ({
    links: state.userData.links
})
export default connect(mapStateToProps, { deleteLink })(CategoryWrapper);