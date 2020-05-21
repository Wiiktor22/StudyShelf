import styled, { css } from 'styled-components';
import { theme } from '../../themes/StylesVariables';

const Logo = styled.h1`
    font-size: 5.4rem;
    color: ${theme.yellow};
    font-family: 'Fredoka One', cursive;
    margin-bottom: 3vh;
    animation: .5s backInDown;

    ${({ nav }) => (
        nav && css`
            font-size: 3rem;
            margin: 3vh 0 5vh;
        `
    )}
`;

export default Logo;