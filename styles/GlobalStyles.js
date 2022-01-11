import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
    ${"" /* --background: #e6e6e6; */}
    --blue: #00144c;
    --red: #912126;
    --text: #00144c;
    --yellow: #ffd46d;
    --white: #ffffff;
    --light-blue: #3c74b9;

    --background: #ffffff;
    --gray: #323232;
    --light-gray: #e6e6e6;
;
    }

    html {
      font-size: 62.5%;
      scroll-behavior: smooth;
    }

    * {
    margin: 0;
    padding: 0;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    }

    a {
      text-decoration: none;
      cursor: pointer;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    li,
    ol,
    p {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    body {
      width: 100vw;
      font-family: "Roboto", sans-serif;
      font-size: 1.4rem;
      font-weight: 400;
      color: var(--text);
      background-color: var(--background);

      transition: ease-in-out 0.3s all;
      scrollbar-width: none;
    }

    @media print {
        body {
          background-color: var(--white);
        }
      }
    `;

export const theme = {
  colors: {
    primary: "#E7E7E7",
  },
};
