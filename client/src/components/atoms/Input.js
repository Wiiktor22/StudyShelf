import styled from 'styled-components';
import { theme } from '../../themes/StylesVariables';

export const Input = styled.input`
    border: none;
    border-radius: 5px;
    background-color: #F3F3F4;
    font-size: 1.4rem;
    padding: 1vh .5vw;
    width: 350px;
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 5vh;

    :nth-last-of-type(1) {
        margin-bottom: 3vh;
    }
`;

export const Label = styled.label`
    margin-bottom: 6px;
    font-weight: 600;
    font-size: 1.2rem;
    color: ${theme.grey};
`;