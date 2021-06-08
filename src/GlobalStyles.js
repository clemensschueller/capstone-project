import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;
  }
  
  body {
    display: flex;
    justify-content: center;
    color: darksalmon;
    background-color: #ebf1f4;
    margin: 0;
    font-family: sans-serif;
    font-size: 112.5%;
  }
  
  input,
  button,
  textarea {
    font-size: inherit;
  }
`
export default GlobalStyles
