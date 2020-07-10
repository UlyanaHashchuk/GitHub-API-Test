import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box; 
    margin: 0px; 
    padding: 0px;
    font-family: Arial;
  }
  a, div {
    text-decoration: none;
  }
`

export default GlobalStyle
