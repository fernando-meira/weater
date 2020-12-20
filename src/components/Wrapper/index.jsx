import React from 'react';

import Search from '../Search';
import Header from '../Header';

import Snow from '../../themes/assets/snow.svg';

import {
  Climate,
  Container,
  Temperature,
  LeftWrapper,
  RightWrapper,
} from './styles';

const Wrapper = () => {
  return (
    <Container>
      <LeftWrapper>
        <Search />

        <Temperature>
          <h1>
            3<small>ºC</small>
          </h1>

          <h3>Nevando</h3>

          <h2>Itapetininga, SP</h2>
        </Temperature>

        <Climate>
          <li>
            <p>Sensação térmica:</p>

            <h2>2ºC</h2>
          </li>

          <li>
            <p>Temp. Mínima:</p>

            <h2>2ºC</h2>
          </li>

          <li>
            <p>Temp. Máxima:</p>

            <h2>12ºC</h2>
          </li>
        </Climate>
      </LeftWrapper>

      <RightWrapper>
        <Header />

        <div>
          <img src={Snow} alt="snow" />
        </div>
      </RightWrapper>
    </Container>
  );
};

export default Wrapper;
