import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }

  body, button {
    height: 100%;
    width: 100%;
    background-color: orange;
  }
`
