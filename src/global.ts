import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --background: #f0f2f5;
  --green: #B4D9CB;
  --orange: #EF7734;
  --greeny: #D3CE3D;
  --cream: #F9F4C2;
  --brown: #574437;
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
    font-size: 93.75%;
  }

  @media (max-width: 720px) {
    font-size: 87.5%;
  }
  }

  body {
    background : var(--background);
    -webkit-font-smoothing: antialiased;
  } 

  body, input, textarea, button {
    font-family: "SF-Pro-Display", sans-serif;
    font-weight: 400;
  }

  h1 {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
