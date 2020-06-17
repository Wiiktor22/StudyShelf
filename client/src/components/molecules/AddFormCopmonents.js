import styled, { css } from 'styled-components';
import { theme } from '../../themes/StylesVariables';

export const Wrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: ${({ isOpen }) => isOpen ? 'translate(-50%, -50%)' : 'translate(-50%, -200%)'};
    height: 50vh;
    width: 30vw;
    background-color: black;
    border-radius: 15px;
    background-color: white;
    border: ${({ isOpen }) => isOpen ? `1.5px solid ${theme.main}` : 'none'};
    transition: transform .6s ease-in-out, border .05s .55s linear;
`;

export const ExitButton = styled.img`
    position: absolute;
    top: 2vh;
    right: 1vw;
    width: 22px;
    height: 22px;
    cursor: pointer;
`;

export const FlexWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 2vh 1vw;
`;

export const Header = styled.h4`
    color: ${theme.main};
    font-size: 2rem;
    margin-bottom: 5vh;
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
    border-bottom: 2px solid ${theme.main};
    padding: 7px 12px;
    font-size: 1.3rem;
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    margin-bottom: 3vh;
`;

export const Select = styled.select`
    background-color: #fafafa;
    border: none;
    border-bottom: 2px solid ${theme.main};
    padding: 7px 12px;
    font-size: 1.3rem;
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 3vh;
    width: 50%;
`;

export const TextArea = styled.textarea`
    display: block;
    background-color: #fafafa;
    border: none;
    border-bottom: 2px solid ${theme.main};
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
            position: absolute;
            left: 1vw;
            bottom: 2vh;
            color: ${theme.main};
            font-size: 1.1rem;
        `
    )}
`;