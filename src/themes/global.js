import { createGlobalStyle } from 'styled-components';

import background from './assets/objects.svg';

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  overflow: hidden;

  color: #fff;
  font-weight: 500;
  background-color: #D1CFCA;
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: center top;
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  background-image: url(${background});
}

button {
  cursor: pointer;
}
`;
