import styled from 'styled-components';
import { theme } from '../../themes/StylesVariables';

const Button = styled.button`
    background-color: ${theme.main};
    color: ${theme.yellow};
    border-radius: 5px;
    margin-top: 3vh;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.4rem;
    font-weight: 600;
    padding: 7px 0;
    width: 180px;
    transition: .4s;

    :hover {
        background-color: ${theme.yellow};
        color: ${theme.main};
    }
`;

export default Button;