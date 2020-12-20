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

  background-color: #D1CFCA;
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: center top;
  background-image: url(${background});
}
`;
