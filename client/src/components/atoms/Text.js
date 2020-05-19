import styled, { css } from 'styled-components';
import { theme } from '../../themes/StylesVariables';

const Text = styled.p`
    font-size: 1.4rem;

    ${({ yellow }) => (
        yellow && css`
            color: ${theme.yellow};
            font-weight: 600;
        `
    )}
`;

export default Text;
