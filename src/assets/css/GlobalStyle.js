import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *{
        box-sizing: border-box;
    }

    body {
        height: 100%;
        background-color: #B0C4DE;
    }

    @page {
        size: auto;
        margin: 0;
    }
`;

export default GlobalStyle;
