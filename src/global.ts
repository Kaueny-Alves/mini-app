import styled, { createGlobalStyle } from "styled-components";

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

  a{
    text-decoration: none;
  }
`;

export const Btn = styled.button`
display: flex;
align-items: center;
justify-content: center;
font-size: 1rem;
margin: 0.25rem;
width: 200px;
height: 2.5rem;
border: 1px solid transparent;
border-radius: 0.25rem;
transition: border-color 0.2s;
background: ${(props) => props.color === "orange" ?  "var(--orange)" : "var(--greeny)" };
color: ${(props) => props.color === "orange"  ? "var(--cream)" : "var(--brown)" };

&:hover {
border-color: ${(props) => props.color === "btnOrange"  ? "var(--cream)" : "var(--brown)" };
}
`