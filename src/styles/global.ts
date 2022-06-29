import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    :root {
        --background-color: #f0f2f5;
        --red: #E52E4D;
        --blue: #5429CC;

        --blue-light: #6933ff;

        --text-title: #363f5f;
        --text-body: #969cb3;

        --background: #f0f2f5;
        --shape: #ffffff;
    }
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; // 16px -> 93.75% = 14px
        }
        @media (max-width: 720px) {
            font-size: 87.5%; // 16px -> 87.5% = 14px
        }
    }

    body {
        background: var(--background-color);
        /* fontes mais nítidas  */
        -webkit-font-smoothing: antialiased;
    }
    button {
        cursor: pointer;
    }
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
    `