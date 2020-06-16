import styled from 'styled-components';
import { theme } from '../../themes/StylesVariables';

const CheckBox = styled.input`
    :checked {
        background-color: ${theme.main};
    }
`;

export default CheckBox;