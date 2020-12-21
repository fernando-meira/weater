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

const Wrapper = ({ climateData }) => {
  return (
    <Container>
      <LeftWrapper>
        <Search />

        <Temperature>
          <h1>
            {climateData?.main?.temp}
            <small>ºC</small>
          </h1>

          {/* <h3>{weather[0].description}</h3> */}

          <h2>
            {climateData?.name}, {climateData?.sys?.country}
          </h2>
        </Temperature>

        <Climate>
          <li>
            <p>S. térmica:</p>

            <h2>2ºC</h2>
          </li>

          <li>
            <p>Mínima:</p>

            <h2>{climateData?.main?.temp_min}ºC</h2>
          </li>

          <li>
            <p>Máxima:</p>

            <h2>{climateData?.main?.temp_max}ºC</h2>
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
