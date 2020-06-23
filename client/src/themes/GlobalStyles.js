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
        @media (max-width: 1024px) {
            max-width: 100vw;
        }
    }

    button {
        border: none;
        cursor: pointer;
        outline: none;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;

export default GlobalStyles;