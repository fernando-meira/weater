import React, { useState, useEffect, useCallback } from 'react';

import api from '../../services';
import { Wrapper } from '../../components';
import { useParams } from '../../hooks/ParamsContext';

import { Container } from './styles';

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
        console.log(error);
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
      <Wrapper climateData={climateData} />
    </Container>
  );
};

export default Main;
