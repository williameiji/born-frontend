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

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background: #f1f1f1; 
    }
    
    ::-webkit-scrollbar-thumb {
        background: #888; 
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }

    @keyframes spin {
        50%,
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes fill {
        25%,
        50% {
            transform: scaleY(0);
        }
        100% {
            transform: scaleY(1);
        }
    }

    .Modal {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 20px;
        background: white;
        pointer-events: none;
        border-radius: 5px;
        outline: none;
        z-index: 1;
    }

    .Overlay {
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1;
    }
`;

export default GlobalStyle;
