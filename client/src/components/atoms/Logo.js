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

    @media (max-width: 768px) {
        margin: 0 5vw 0 3vw;
    }
    @media (max-width: 414px) {
        font-size: 2rem;
    }
`;

export default Logo;