import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;
  }
  
  body {
    display: flex;
    justify-content: center;
    color: black;
    background-color: #ebf1f4;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 112.5%;
  }
  
  input,
  button,
  textarea {
  font-size: inherit;
  }
`
export default GlobalStyles
