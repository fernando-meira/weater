import React, { useState, useEffect, useCallback } from 'react';
import swal from 'sweetalert';
import { FiSearch } from 'react-icons/fi';

import api from '../../services';
import { Header } from '../../components';
import Snow from '../../themes/assets/snow.svg';
import { useParams } from '../../hooks/ParamsContext';

import {
  Search,
  Wrapper,
  Climate,
  Container,
  Temperature,
  LeftWrapper,
  RightWrapper,
} from './styles';

const Main = () => {
  const paramsToFetch = useParams();

  const [climateData, setClimateData] = useState({});
  const [initialPosition, setInitialPosition] = useState([]);

  const fetchWeater = useCallback(
    async (latitude, longitude) => {
      try {
        const { data } = await api.get('weather', {
          params: {
            ...paramsToFetch,
            q: 'Itapetininga',
            lat: latitude,
            lon: longitude,
          },
        });

        setClimateData(data);
      } catch (error) {
        swal(
          'Opa, algo de errado!',
          'Se o erro persistir contate-nos!',
          'error',
        );
      }
    },
    [paramsToFetch],
  );

  useEffect(() => {
    if (initialPosition) {
      fetchWeater(initialPosition[0], initialPosition[1]);
    }
  }, [fetchWeater, initialPosition]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;

      setInitialPosition([latitude, longitude]);
    });
  }, []);

  return (
    <Container>
      <Wrapper>
        <LeftWrapper>
          <Search>
            <input type="text" placeholder="Pesquisar..." />

            <button type="button">
              <FiSearch size={24} color="#fff" />
            </button>
          </Search>

          <Temperature>
            <h1>
              {parseInt(climateData?.main?.temp, 10)}
              <small>ºC</small>
            </h1>

            <h3>{climateData?.weather?.[0].description}</h3>

            <h2>
              {climateData?.name}, {climateData?.sys?.country}
            </h2>
          </Temperature>

          <Climate>
            <li>
              <p>S. térmica:</p>

              <h2>{`${climateData?.main?.feels_like}ºC`}</h2>
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
      </Wrapper>
    </Container>
  );
};

export default Main;
