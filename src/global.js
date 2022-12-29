import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #0e0e0e;
    font-family: 'JetBrains Mono', monospace;

    &::selection {
        background-color:  #FFC000;
        color: #0e0e0e;
    }
    }

    * {
    scrollbar-width: thin;
    scrollbar-color: #ffc000;
  }
  
  /* Works on Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 10px;
  }
  
  *::-webkit-scrollbar-track {
    background: #0e0e0e;
  }
  
  *::-webkit-scrollbar-thumb {
    background-color: #ffc000;
    border-radius: 20px;
  }
    
`;

export default GlobalStyle;
