import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    html {
        font-size: 10px;
    }

    body {
        font-family: 'Montserrat', sans-serif;
    }

    button {
        border: none;
        cursor: pointer;
    }

    a {
        text-decoration:none;
        color:inherit;
    }
`;

export default GlobalStyles;