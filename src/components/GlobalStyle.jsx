import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Montserrat';
        background-color: ${props => props.theme.colors.primaryBackground};
    }

    .container {
        width: 1440px;
        margin: 0 auto;
        padding: 0 165px;
    }
`;

export default GlobalStyle;