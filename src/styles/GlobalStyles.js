import { createGlobalStyle } from "styled-components";
import {} from "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  a {
    text-decoration: none;
  }

  body {
    background-color: #fff;
    color: #546E7A;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: "Quicksand", sans-serif;
    font-size: 16px;
  }
  button{
    border: none;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  ul > li {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
