import styled, { css } from 'styled-components';
import { theme } from '../../themes/StylesVariables';

export const Wrapper = styled.div`
    position: fixed;
    top: 6vh;
    bottom: 0;
    right: -20vw;
    display: flex;
    border-top: 3px solid ${theme.yellow};
    border-left: 3px solid ${theme.yellow};
    transform: ${({ isOpen }) => isOpen ? 'translateX(-20vw)' : 'translateX(0)'};
    width: 20vw;
    background-color: white;
    flex-direction: column;
    justify-content: center;
    z-index: 10;
    transition: .6s ease-in-out;

    @media (max-width: 1366px) {
        width: 27vw;
        right: -27vw;
        transform: ${({ isOpen }) => isOpen ? 'translateX(-27vw)' : 'translateX(0)'};
    }
    @media (max-width: 1024px) {
        width: 30vw;
        right: -30vw;
        transform: ${({ isOpen }) => isOpen ? 'translateX(-30vw)' : 'translateX(0)'};
    }
    @media (max-width: 768px) {
        top: 8vh;
        width: 45vw;
        right: -45vw;
        transform: ${({ isOpen }) => isOpen ? 'translateX(-45vw)' : 'translateX(0)'};
    }
    @media (max-width: 420px) {
        width: 75vw;
        right: -75vw;
        transform: ${({ isOpen }) => isOpen ? 'translateX(-75vw)' : 'translateX(0)'};
    }
    @media (max-width: 400px) {
        width: 80vw;
        right: -80vw;
        transform: ${({ isOpen }) => isOpen ? 'translateX(-80vw)' : 'translateX(0)'};
    }
`;

export const ExitButton = styled.img`
    position: absolute;
    top: 2vh;
    right: 1vw;
    width: 36px;
    height: 36px;
    cursor: pointer;
`;

export const FlexWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 2vh 1vw;

    @media (max-width: 1024px) {
        padding: 2vh 1.8vw;
    }
    @media (max-width: 420px) {
        padding: 2vh 3vw;
    }
`;

export const Header = styled.h4`
    color: ${theme.yellow};
    font-size: 2.6rem;
    margin-bottom: 7vh;
`;

export const Label = styled.label`
    font-size: 1.1rem;
    margin-left: 5px;
    margin-bottom: 3px;
`;

export const Input = styled.input`
    display: block;
    background-color: #fafafa;
    border: none;
    border-bottom: 2px solid ${theme.yellow};
    padding: 7px 12px;
    font-size: 1.3rem;
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    margin-bottom: 3vh;
`;

export const Select = styled.select`
    background-color: #fafafa;
    border: none;
    border-bottom: 2px solid ${theme.yellow};
    padding: 7px 12px;
    font-size: 1.3rem;
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 4vh;
    width: 70%;
`;

export const TextArea = styled.textarea`
    display: block;
    background-color: #fafafa;
    border: none;
    border-bottom: 2px solid ${theme.yellow};
    padding: 7px 12px;
    font-size: 1.3rem;
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    height: 20vh;
    resize: none;
    margin-bottom: 5vh;
`;

export const Content = styled.p`
    font-size: 1.3rem;

    ${({ date }) => (
        date && css`
            margin-top: 4vh;
            color: ${theme.yellow};
            font-size: 1.2rem;
        `
    )}
`;