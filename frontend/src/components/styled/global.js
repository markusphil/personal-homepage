import { createGlobalStyle } from "styled-components"
import { colors, fontSizes } from "./variables"

export default createGlobalStyle`
body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${colors.BACKGROUND};
  color: ${colors.TEXT};
  font-family: roboto, sans-serif;
  font-weight: 100;
  word-wrap: break-word;
}

button{
    cursor:pointer;
}

a{
    color: ${colors.TEXT};
    cursor: pointer;
}

a:visited {
    color: ${colors.TEXT_LIGHTER};
}

p{
    margin-top:0
}

button {
    font-family: roboto, sans-serif;
}

h4 {
    color: ${colors.WHITE};
    font-size: ${fontSizes.P};
    font-weight: normal;
    margin: 0 0 .5rem 0;
}
`
