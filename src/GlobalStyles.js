import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;
  }
  
:root{
  --color-primary-background: #ebf1f4;
  --color-primary-font: #333333;
  --color-secondary-background: #f5f5f5;
  --color-secondary-font: #592236;
  --color-header: #F1E7DB;
  --color-header-font: #D2D6D9;
  //--color-navigation: #F1E7DB;
  --color-active: #F1E7DB;
}

  body {
    display: flex;
    justify-content: center;
    color: var(---color-primary-font);
    background-color: var(---color-primary-background);
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
