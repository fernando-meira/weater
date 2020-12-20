import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html, body {
  overflow: hidden;
}


body {
  position: relative;

  color: #fff;
  font-weight: 500;
  background-color: #D1CFCA;
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
}

button {
  cursor: pointer;
}
`;
