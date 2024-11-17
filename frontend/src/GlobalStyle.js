import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: Cyber;
  src: url("https://assets.codepen.io/605876/Blender-Pro-Bold.otf");
  font-display: swap;
}
  :root {
  --maxWidth: 80%;
  --white: #fdfdfd;
  --lightDark: #383838;
  --black: #000000;
  --green: #118841;
  --fontSuperBig: 4rem;
  --fontBig: 2.5rem;
  --fontMed: 1.2rem;
  --fontSmall: 1rem;
  --spacing:0.15rem;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0; 
  }

  body {
    background-color: var(--black);
    color: var(--white);
    text-transform: uppercase;
    font-family:"Monument Extended", "Helvetica", Arial, sans-serif;
  }

  h1 {
    font-size: 2rem;
    font-weight: 600;
    color: var(--white);
  }

  h3 {
    font-size: 1.1rem;
    font-weight: 600;
  }

  p {
    
    font-size: 1rem;
    color: var(--white);
    text-transform: none;
  }
  button {
    text-transform: uppercase;
    font-weight: 600;
  }
`;
