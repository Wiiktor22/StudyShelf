import styled, { css } from 'styled-components';
import { theme } from '../../themes/StylesVariables';

const Button = styled.button`
    background-color: ${theme.main};
    color: white;
    border-radius: 5px;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.4rem;
    font-weight: 600;
    padding: 7px 0;
    width: 180px;
    transition: .4s;
    
    ${({ notes }) => (
        notes && css`
            border-radius: 15px;
        `
    )}

    ${({ note }) => (
        note && css`
            border-radius: 15px;
            width: 100px;
            font-size: 1.1rem;
            padding: 4px 0;
        `
    )}

    ${({ sites }) => (
        sites && css`
            border-radius: 15px;
            margin-right: 3vw;
        `
    )}

    ${({ yellow }) => (
        yellow && css`
            margin-top: 7vh;
            background-color: ${theme.yellow};
        `
    )}
`;

export default Button;