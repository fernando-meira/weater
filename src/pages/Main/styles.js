import styled from 'styled-components';

import background from '../../themes/assets/objects.svg';
import mobileBackground from '../../themes/assets/mobileObjects.svg';

export const Container = styled.main`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: center top;
  background-image: url(${mobileBackground});
`;
